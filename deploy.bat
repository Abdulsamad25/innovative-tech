@echo off

REM Build and Deploy Script for InnovativeTech (Windows)
echo 🚀 Starting deployment process...

REM Check if .env exists
if not exist ".env" (
    echo ❌ .env file not found! Please create one from .env.example
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install --production=false

REM Build the frontend
echo 🏗️ Building frontend...
npm run build

REM Test the build
if not exist "dist" (
    echo ❌ Build failed! dist directory not found.
    exit /b 1
)

echo ✅ Build completed successfully!
echo 📁 Files ready for deployment in 'dist' directory
echo.
echo 📋 Next steps:
echo 1. Deploy 'dist' folder to your hosting platform (Netlify/Vercel)
echo 2. Deploy server.js to backend hosting (Railway/Render)
echo 3. Set up environment variables on both platforms
echo 4. Update CORS origins in server.js with your domain
echo.
echo 🎉 Ready for production!