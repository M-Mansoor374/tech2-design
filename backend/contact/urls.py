from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_submission, name='contact_submission'),
    path('test-email/', views.test_email_config, name='test_email_config'),
] 