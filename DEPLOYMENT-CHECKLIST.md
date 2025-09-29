# 🚀 InnovativeTech - Production Deployment Checklist

## ✅ Pre-Deployment Setup Complete

### 🔒 Security & Environment

- [x] `.env` files added to `.gitignore`
- [x] Environment variables template created (`.env.example`)
- [x] CORS configured for production
- [x] Security headers added
- [x] Production build optimized

### 📁 Files Ready for Deployment

- [x] `dist/` folder - Frontend build output
- [x] `server.js` - Backend server
- [x] `_redirects` - SPA routing configuration
- [x] `ecosystem.config.json` - PM2 configuration
- [x] Deploy scripts (`deploy.sh`, `deploy.bat`)

## 🎯 Deployment Options

### Option 1: Split Deployment (Recommended)

#### Frontend (Netlify)

1. **Deploy to Netlify:**
   ```bash
   # Drag and drop the 'dist' folder to Netlify
   # Or connect your GitHub repo
   ```
2. **Netlify Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - `_redirects` file handles routing automatically

#### Backend (Railway/Render)

1. **Deploy server.js to Railway:**

   - Connect GitHub repo
   - Set start command: `node server.js`
   - Add environment variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_TO=contact@innovative-tech.com
     NODE_ENV=production
     FRONTEND_URL=https://your-netlify-domain.com
     ```

2. **Update Frontend API calls:**
   - Replace localhost URLs with Railway backend URL
   - Update CORS origin in server.js

### Option 2: Full-Stack Deployment (Render/Railway)

- Deploy entire repo as full-stack app
- Use provided `ecosystem.config.json` for PM2
- Both frontend and backend on same domain

## 🔧 Environment Variables Needed

### Backend (.env file):

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_TO=your-business@email.com
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-domain.com
```

### Frontend (if using separate backend):

```env
VITE_API_URL=https://your-backend-url.com
```

## 📋 Final Steps

1. **Test locally first:**

   ```bash
   npm run build
   npm start
   ```

2. **Update API endpoints:**

   - Replace `localhost:5000` with production backend URL
   - Test contact form and newsletter

3. **DNS & Domain:**

   - Point your domain to hosting platform
   - SSL certificates (automatic on Netlify/Vercel)

4. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate app-specific password
   - Use in EMAIL_PASS environment variable

## 🎉 Post-Deployment

- Test all forms (contact, newsletter)
- Check email delivery
- Verify all pages load correctly
- Test responsive design
- Monitor server logs

## 📞 Need Help?

- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Railway: [docs.railway.app](https://docs.railway.app)
- Render: [render.com/docs](https://render.com/docs)

---

**Your site is ready for production! 🚀**
