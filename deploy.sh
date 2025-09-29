#!/bin/bash

# Build and Deploy Script for InnovativeTech
echo "🚀 Starting deployment process..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found! Please create one from .env.example"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production=false

# Build the frontend
echo "🏗️  Building frontend..."
npm run build

# Test the build
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Files ready for deployment in 'dist' directory"
echo ""
echo "📋 Next steps:"
echo "1. Deploy 'dist' folder to your hosting platform (Netlify/Vercel)"
echo "2. Deploy server.js to backend hosting (Railway/Render)"
echo "3. Set up environment variables on both platforms"
echo "4. Update CORS origins in server.js with your domain"
echo ""
echo "🎉 Ready for production!"