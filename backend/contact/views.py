from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer
import logging

logger = logging.getLogger(__name__)


@api_view(['GET'])
@permission_classes([AllowAny])
def test_email_config(request):
    """
    Test endpoint to verify email configuration.
    """
    try:
        # Test email configuration
        test_subject = "Test Email from Django Contact API"
        test_message = "This is a test email to verify the email configuration is working."
        
        logger.info(f"Testing email configuration...")
        logger.info(f"EMAIL_BACKEND: {settings.EMAIL_BACKEND}")
        logger.info(f"EMAIL_HOST: {settings.EMAIL_HOST}")
        logger.info(f"EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
        logger.info(f"DEBUG: {settings.DEBUG}")
        
        send_mail(
            subject=test_subject,
            message=test_message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['muhammadmansoorayub@gmail.com'],
            fail_silently=False,
        )
        
        return Response({
            'success': True,
            'message': 'Test email sent successfully! Check your email or console output.',
            'config': {
                'backend': settings.EMAIL_BACKEND,
                'host': settings.EMAIL_HOST,
                'user': settings.EMAIL_HOST_USER,
                'debug': settings.DEBUG
            }
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        logger.error(f"Test email failed: {e}")
        return Response({
            'success': False,
            'message': f'Test email failed: {str(e)}',
            'config': {
                'backend': settings.EMAIL_BACKEND,
                'host': settings.EMAIL_HOST,
                'user': settings.EMAIL_HOST_USER,
                'debug': settings.DEBUG
            }
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])
def contact_submission(request):
    """
    Handle contact form submissions.
    
    Expected JSON payload:
    {
        "name": "John Doe",
        "email": "john@example.com", 
        "subject": "Project Inquiry",
        "message": "Hello, I'm interested in your services...",
        "to_email": "muhammadmansoorayub@gmail.com"
    }
    """
    try:
        # Validate and save the submission
        serializer = ContactSubmissionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'success': False,
                'message': 'Validation failed',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Save to database
        contact_submission = serializer.save()
        
        # Prepare email content
        subject = f"New Contact Form Submission: {contact_submission.subject}"
        
        message = f"""
New contact form submission received:

Name: {contact_submission.name}
Email: {contact_submission.email}
Subject: {contact_submission.subject}

Message:
{contact_submission.message}

---
This message was sent from your website contact form.
        """.strip()
        
        # Send email
        try:
            # Log email configuration for debugging
            logger.info(f"Email configuration: BACKEND={settings.EMAIL_BACKEND}, HOST={settings.EMAIL_HOST}, USER={settings.EMAIL_HOST_USER}")
            
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[contact_submission.to_email],
                fail_silently=False,
            )
            
            # Update submission as sent
            contact_submission.is_sent = True
            contact_submission.sent_at = timezone.now()
            contact_submission.save()
            
            logger.info(f"Contact form email sent successfully for {contact_submission.email}")
            
            return Response({
                'success': True,
                'message': 'Your message has been sent successfully!'
            }, status=status.HTTP_200_OK)
            
        except Exception as email_error:
            logger.error(f"Failed to send email for contact submission: {email_error}")
            logger.error(f"Email error details: {type(email_error).__name__}: {str(email_error)}")
            
            # In development mode, still return success since emails are printed to console
            if settings.DEBUG:
                return Response({
                    'success': True,
                    'message': 'Your message has been received! Check the console for email details.'
                }, status=status.HTTP_200_OK)
            else:
                # In production, return a more specific error
                return Response({
                    'success': False,
                    'message': 'Your message was received but we could not send a confirmation email. Please try again later.'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    except Exception as e:
        logger.error(f"Contact form submission error: {e}")
        return Response({
            'success': False,
            'message': 'An error occurred while processing your request. Please try again later.'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 