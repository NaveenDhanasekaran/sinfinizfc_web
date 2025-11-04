#!/usr/bin/env python3
"""
Main application launcher for Sinfini Website
Starts both backend (Flask) and frontend (React) development servers
"""

import os
import sys
import subprocess
import time
import atexit
import signal
from pathlib import Path

# Get project root directory
PROJECT_ROOT = Path(__file__).parent.absolute()
BACKEND_DIR = PROJECT_ROOT / "backend"
FRONTEND_DIR = PROJECT_ROOT / "frontend"

# Process tracking
processes = []

def cleanup_processes():
    """Clean up all spawned processes"""
    print("\n🔄 Shutting down services...")
    for proc in processes:
        if proc and proc.poll() is None:
            try:
                proc.terminate()
                proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                proc.kill()
    print("✅ All services stopped")

def signal_handler(signum, frame):
    """Handle Ctrl+C gracefully"""
    cleanup_processes()
    sys.exit(0)

def check_dependencies():
    """Check if required dependencies are installed"""
    print("🔍 Checking dependencies...")
    
    # Check if backend dependencies exist
    requirements_file = BACKEND_DIR / "requirements.txt"
    if not requirements_file.exists():
        print("❌ Backend requirements.txt not found")
        return False
    
    # Check if frontend dependencies exist
    package_json = FRONTEND_DIR / "package.json"
    if not package_json.exists():
        print("❌ Frontend package.json not found")
        return False
    
    node_modules = FRONTEND_DIR / "node_modules"
    if not node_modules.exists():
        print("⚠️  Frontend dependencies not installed. Run 'npm install' in frontend directory first.")
        return False
    
    print("✅ Dependencies check passed")
    return True

def start_backend():
    """Start the Flask backend server"""
    print("🚀 Starting backend server...")
    
    # Set environment variables for development
    env = os.environ.copy()
    env['FLASK_DEBUG'] = '1'
    env['START_FRONTEND_DEV'] = '0'  # Don't let backend start frontend
    
    try:
        backend_proc = subprocess.Popen(
            [sys.executable, "app.py"],
            cwd=BACKEND_DIR,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            universal_newlines=True,
            bufsize=1
        )
        processes.append(backend_proc)
        print("✅ Backend server starting on http://localhost:5000")
        return backend_proc
    except Exception as e:
        print(f"❌ Failed to start backend: {e}")
        return None

def start_frontend():
    """Start the React frontend development server"""
    print("🚀 Starting frontend server...")
    
    # Determine npm command based on OS
    npm_cmd = 'npm.cmd' if os.name == 'nt' else 'npm'
    
    try:
        frontend_proc = subprocess.Popen(
            [npm_cmd, 'start'],
            cwd=FRONTEND_DIR,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            universal_newlines=True,
            bufsize=1
        )
        processes.append(frontend_proc)
        print("✅ Frontend server starting on http://localhost:3000")
        return frontend_proc
    except Exception as e:
        print(f"❌ Failed to start frontend: {e}")
        return None

def monitor_processes(backend_proc, frontend_proc):
    """Monitor both processes and handle output"""
    print("\n🎯 Both servers are starting...")
    print("📱 Frontend: http://localhost:3000")
    print("🔧 Backend API: http://localhost:5000")
    print("⏹️  Press Ctrl+C to stop both servers\n")
    
    try:
        while True:
            # Check if processes are still running
            if backend_proc and backend_proc.poll() is not None:
                print("❌ Backend process stopped unexpectedly")
                break
            
            if frontend_proc and frontend_proc.poll() is not None:
                print("❌ Frontend process stopped unexpectedly")
                break
            
            time.sleep(1)
    except KeyboardInterrupt:
        pass

def main():
    """Main application entry point"""
    print("🌟 Sinfini Website Development Server")
    print("=" * 50)
    
    # Register cleanup handlers
    atexit.register(cleanup_processes)
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    # Check dependencies
    if not check_dependencies():
        print("\n💡 Setup instructions:")
        print("   1. Backend: pip install -r backend/requirements.txt")
        print("   2. Frontend: cd frontend && npm install")
        sys.exit(1)
    
    # Start both servers
    backend_proc = start_backend()
    if not backend_proc:
        sys.exit(1)
    
    # Give backend a moment to start
    time.sleep(2)
    
    frontend_proc = start_frontend()
    if not frontend_proc:
        cleanup_processes()
        sys.exit(1)
    
    # Monitor processes
    monitor_processes(backend_proc, frontend_proc)
    
    # Cleanup
    cleanup_processes()

if __name__ == "__main__":
    main()
