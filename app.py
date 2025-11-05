#!/usr/bin/env python3
"""
Main application launcher for Sinfini Website
Runs the Flask backend with integrated frontend templates
"""

import os
import sys
from pathlib import Path

# Get project root directory
PROJECT_ROOT = Path(__file__).parent.absolute()
BACKEND_DIR = PROJECT_ROOT / "backend"

def main():
    """Main application entry point"""
    print("Sinfini Marketing Website")
    print("=" * 50)
    
    # Check if backend directory exists
    if not BACKEND_DIR.exists():
        print("Backend directory not found")
        sys.exit(1)
    
    # Check if requirements are installed
    requirements_file = BACKEND_DIR / "requirements.txt"
    if not requirements_file.exists():
        print("Backend requirements.txt not found")
        sys.exit(1)
    
    print("Starting Flask server with integrated frontend...")
    print("Website will be available at: http://localhost:5000")
    print("Admin panel: http://localhost:5000/admin/login")
    print("Press Ctrl+C to stop the server\n")
    
    # Change to backend directory and run the Flask app
    os.chdir(BACKEND_DIR)
    
    # Set environment variables
    os.environ['FLASK_DEBUG'] = '1'
    os.environ['START_FRONTEND_DEV'] = '0'  # Don't start React dev server
    
    # Import and run the Flask app
    try:
        from app import app
        app.run(host='0.0.0.0', port=5000, debug=True)
    except ImportError as e:
        print(f"Error importing Flask app: {e}")
        print("Make sure you've installed the requirements: pip install -r backend/requirements.txt")
        sys.exit(1)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
