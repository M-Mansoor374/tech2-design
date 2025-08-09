#!/usr/bin/env python3
"""
Setup script for Django Contact API Backend
"""

import os
import subprocess
import sys
from pathlib import Path

def run_command(command, description):
    """Run a command and handle errors."""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed:")
        print(f"Error: {e.stderr}")
        return False

def main():
    print("🚀 Setting up Django Contact API Backend...")
    
    # Check if we're in the right directory
    if not Path("manage.py").exists():
        print("❌ Error: manage.py not found. Please run this script from the backend directory.")
        sys.exit(1)
    
    # Create .env file if it doesn't exist
    if not Path(".env").exists():
        print("📝 Creating .env file from template...")
        try:
            with open("env.example", "r") as f:
                env_content = f.read()
            with open(".env", "w") as f:
                f.write(env_content)
            print("✅ .env file created. Please edit it with your settings.")
        except FileNotFoundError:
            print("⚠️  env.example not found. Creating basic .env file...")
            with open(".env", "w") as f:
                f.write("SECRET_KEY=django-insecure-your-secret-key-here\nDEBUG=True\n")
    
    # Install dependencies
    if not run_command("pip install -r requirements.txt", "Installing dependencies"):
        print("❌ Failed to install dependencies. Please check your Python environment.")
        sys.exit(1)
    
    # Make migrations
    if not run_command("python manage.py makemigrations", "Creating database migrations"):
        print("❌ Failed to create migrations.")
        sys.exit(1)
    
    # Apply migrations
    if not run_command("python manage.py migrate", "Applying database migrations"):
        print("❌ Failed to apply migrations.")
        sys.exit(1)
    
    print("\n🎉 Setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Edit the .env file with your email settings")
    print("2. Run: python manage.py runserver")
    print("3. The API will be available at: http://localhost:8000/api/contact/")
    print("4. Admin interface: http://localhost:8000/admin/")
    
    # Ask if user wants to create superuser
    create_superuser = input("\n🤔 Would you like to create a superuser for the admin interface? (y/n): ").lower().strip()
    if create_superuser in ['y', 'yes']:
        run_command("python manage.py createsuperuser", "Creating superuser")
    
    print("\n✨ Setup complete! Happy coding!")

if __name__ == "__main__":
    main() 