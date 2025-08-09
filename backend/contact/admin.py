from django.contrib import admin
from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_sent']
    list_filter = ['is_sent', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['created_at', 'sent_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'subject', 'message', 'to_email')
        }),
        ('Status', {
            'fields': ('is_sent', 'created_at', 'sent_at'),
            'classes': ('collapse',)
        }),
    )
    
    def has_add_permission(self, request):
        return False  # Only allow submissions through the API 