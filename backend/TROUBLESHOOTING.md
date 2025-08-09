# Email Configuration Troubleshooting Guide

## 🚨 Common Error: "Your message was received but we could not send a confirmation email"

This error occurs when the Django backend successfully receives the form submission but fails to send the email. Here's how to fix it:

## 🔧 Quick Fixes

### 1. **For Development (Recommended)**
The backend is configured to use console email backend in development mode. This means emails are printed to the console instead of being sent via SMTP.

**To see the emails:**
1. Check your Django server console output
2. Look for email content in the terminal where you ran `python manage.py runserver`

### 2. **Test Email Configuration**
Run the test script to verify your email setup:

```bash
cd backend
python test_email.py
```

### 3. **Test API Endpoint**
Visit the test endpoint in your browser:
```
http://localhost:8000/api/test-email/
```

## 📧 Email Configuration Options

### Option A: Development Mode (Console Backend)
**Best for development and testing**

Your `.env` file should have:
```env
DEBUG=True
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
```

**Pros:**
- ✅ No email server setup required
- ✅ Emails printed to console for easy debugging
- ✅ Works immediately

**Cons:**
- ❌ No actual emails sent
- ❌ Not suitable for production

### Option B: Gmail SMTP (Production)
**For sending real emails**

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update your `.env` file:**
```env
DEBUG=False
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

### Option C: Other Email Providers
**For other email services**

```env
# Outlook/Hotmail
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587

# Yahoo
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587

# Custom SMTP
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
```

## 🐛 Debugging Steps

### Step 1: Check Current Configuration
```bash
cd backend
python test_email.py
```

### Step 2: Check Django Logs
Look for error messages in your Django server console.

### Step 3: Test API Endpoint
```bash
curl -X GET http://localhost:8000/api/test-email/
```

### Step 4: Check Environment Variables
Make sure your `.env` file exists and has the correct values:

```bash
cd backend
cat .env
```

## 🔍 Common Issues and Solutions

### Issue 1: "SMTPAuthenticationError"
**Solution:** Check your email credentials and app password

### Issue 2: "SMTPServerDisconnected"
**Solution:** Check firewall settings and network connection

### Issue 3: "SMTPRecipientsRefused"
**Solution:** Verify the recipient email address is correct

### Issue 4: "Connection refused"
**Solution:** Check if the SMTP server is accessible from your network

## 🛠️ Production Deployment

For production, you should:

1. **Use a proper email service** (SendGrid, Mailgun, etc.)
2. **Set DEBUG=False**
3. **Use environment variables** for sensitive data
4. **Set up proper SSL/TLS**
5. **Monitor email delivery**

## 📞 Getting Help

If you're still having issues:

1. Check the Django server logs for detailed error messages
2. Run the test script: `python test_email.py`
3. Test the API endpoint: `http://localhost:8000/api/test-email/`
4. Verify your `.env` file configuration

## 🎯 Quick Test

To quickly test if everything is working:

1. **Start the Django server:**
```bash
cd backend
python manage.py runserver
```

2. **Submit a test form** from your frontend
3. **Check the Django console** for email output
4. **Look for success messages** in the browser

If you see email content in the Django console, the system is working correctly! 