# Django Contact API Backend

This Django backend provides a REST API for handling contact form submissions and sending emails.

## Features

- ✅ REST API endpoint for contact form submissions
- ✅ Email sending functionality
- ✅ Form validation and error handling
- ✅ Database storage of submissions
- ✅ CORS support for frontend integration
- ✅ Admin interface for managing submissions
- ✅ Production-ready configuration

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp env.example .env
```

Edit `.env` file with your settings:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Email Settings (for production)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

### 3. Database Setup

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 5. Run Development Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/contact/`

## API Endpoint

### POST /api/contact/

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Hello, I'm interested in your services...",
    "to_email": "muhammadmansoorayub@gmail.com"
}
```

**Success Response (200):**
```json
{
    "success": true,
    "message": "Your message has been sent successfully!"
}
```

**Error Response (400):**
```json
{
    "success": false,
    "message": "Validation failed",
    "errors": {
        "email": ["Please enter a valid email address"]
    }
}
```

## Email Configuration

### For Development
The backend uses console email backend in development mode, so emails will be printed to the console.

### For Production (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file
4. Set `DEBUG=False` in production

## Frontend Integration

The frontend is configured to connect to this API. Make sure to set the environment variable in your Next.js app:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

## Admin Interface

Access the admin interface at `http://localhost:8000/admin/` to view and manage contact submissions.

## Production Deployment

For production deployment:

1. Set `DEBUG=False`
2. Configure proper email settings
3. Use a production database (PostgreSQL recommended)
4. Set up proper CORS settings
5. Use environment variables for sensitive data
6. Set up SSL/HTTPS

## Security Features

- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ SQL injection protection (Django ORM)
- ✅ XSS protection
- ✅ CSRF protection (for admin interface) 