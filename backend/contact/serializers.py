from rest_framework import serializers
from .models import ContactSubmission


class ContactSubmissionSerializer(serializers.ModelSerializer):
    """Serializer for contact form submissions."""
    
    class Meta:
        model = ContactSubmission
        fields = ['name', 'email', 'subject', 'message', 'to_email']
        extra_kwargs = {
            'name': {'required': True, 'max_length': 100},
            'email': {'required': True},
            'subject': {'required': True, 'max_length': 200},
            'message': {'required': True},
            'to_email': {'required': True},
        }
    
    def validate_name(self, value):
        """Validate name field."""
        if not value.strip():
            raise serializers.ValidationError("Name is required.")
        return value.strip()
    
    def validate_email(self, value):
        """Validate email field."""
        if not value.strip():
            raise serializers.ValidationError("Email is required.")
        return value.strip().lower()
    
    def validate_subject(self, value):
        """Validate subject field."""
        if not value.strip():
            raise serializers.ValidationError("Subject is required.")
        return value.strip()
    
    def validate_message(self, value):
        """Validate message field."""
        if not value.strip():
            raise serializers.ValidationError("Message is required.")
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        return value.strip()
    
    def validate_to_email(self, value):
        """Validate to_email field."""
        if not value.strip():
            raise serializers.ValidationError("Recipient email is required.")
        return value.strip().lower() 