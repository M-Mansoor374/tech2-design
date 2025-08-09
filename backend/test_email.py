#!/usr/bin/env python3
"""
Test script to verify email configuration
"""

import os
import sys
import django
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).parent
sys.path.append(str(backend_dir))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'contact_api.settings')
django.setup()

from django.core.mail import send_mail
from django.conf import settings

def test_email_config():
    """Test email configuration"""
    print("🧪 Testing Email Configuration...")
    print(f"📧 EMAIL_BACKEND: {settings.EMAIL_BACKEND}")
    print(f"🌐 EMAIL_HOST: {settings.EMAIL_HOST}")
    print(f"👤 EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
    print(f"🔧 DEBUG: {settings.DEBUG}")
    print(f"🔒 EMAIL_USE_TLS: {settings.EMAIL_USE_TLS}")
    print(f"📨 EMAIL_PORT: {settings.EMAIL_PORT}")
    
    try:
        # Test email
        subject = "Test Email from Django Contact API"
        message = "This is a test email to verify the email configuration is working."
        
        print("\n📤 Sending test email...")
        
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['muhammadmansoorayub@gmail.com'],
            fail_silently=False,
        )
        
        print("✅ Test email sent successfully!")
        print("📬 Check your email or console output for the test message.")
        
    except Exception as e:
        print(f"❌ Test email failed: {e}")
        print(f"🔍 Error type: {type(e).__name__}")
        print("\n💡 Troubleshooting tips:")
        print("1. Check your .env file configuration")
        print("2. For Gmail: Enable 2FA and use App Password")
        print("3. For development: Emails are printed to console")
        print("4. Check firewall/network settings")

if __name__ == "__main__":
    test_email_config() 