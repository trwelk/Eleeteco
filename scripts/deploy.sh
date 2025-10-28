#!/bin/bash

# Deployment script for GoDaddy VPS
# Usage: ./scripts/deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
APP_NAME="eleete-care"

echo "🚀 Starting deployment for $ENVIRONMENT environment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're on the server or local machine
if [ -f /.dockerenv ] || [ -f /etc/godaddy-vps ]; then
    echo "📍 Running on server"
    IS_SERVER=true
else
    echo "📍 Running locally"
    IS_SERVER=false
fi

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check Node.js version
print_status "Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "   Node version: $NODE_VERSION"

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

# Run linting (optional)
print_warning "Running linter..."
npm run lint || print_warning "Linting found some issues, but continuing..."

# Build the application
print_status "Building the application..."
npm run build

if [ $IS_SERVER = true ]; then
    # Server-side deployment steps
    print_status "Restarting application with PM2..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    # Check if app is already running
    if pm2 list | grep -q "$APP_NAME"; then
        print_status "Reloading existing PM2 process..."
        pm2 reload $APP_NAME --update-env
    else
        print_status "Starting new PM2 process..."
        pm2 start ecosystem.config.js
    fi
    
    # Save PM2 configuration
    pm2 save
    
    # Show status
    pm2 status
    
    print_status "Deployment completed successfully! 🎉"
    echo ""
    echo "📝 Useful commands:"
    echo "   pm2 logs $APP_NAME      - View application logs"
    echo "   pm2 restart $APP_NAME   - Restart the application"
    echo "   pm2 status              - Check application status"
    
else
    # Local deployment instructions
    print_warning "You're running this locally."
    echo ""
    echo "📤 To deploy to your server, you have several options:"
    echo ""
    echo "1. Using Git:"
    echo "   git push origin main"
    echo "   # Then on server:"
    echo "   ssh user@your-server"
    echo "   cd /path/to/app"
    echo "   git pull"
    echo "   npm install"
    echo "   npm run build"
    echo "   pm2 restart $APP_NAME"
    echo ""
    echo "2. Using SCP:"
    echo "   scp -r .next/ user@your-server:/path/to/app/"
    echo "   ssh user@your-server 'cd /path/to/app && pm2 restart $APP_NAME'"
    echo ""
    echo "3. Using RSYNC:"
    echo "   rsync -avz --exclude 'node_modules' . user@your-server:/path/to/app/"
    echo "   ssh user@your-server 'cd /path/to/app && npm install && npm run build && pm2 restart $APP_NAME'"
fi

echo ""
print_status "All done! ✨"

