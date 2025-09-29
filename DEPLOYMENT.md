# Deployment Guide for Innovative Tech

## 🚀 Frontend Deployment (Netlify/Vercel)

### Option 1: Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard
4. `_redirects` file handles SPA routing automatically

### Option 2: Vercel

1. Connect your GitHub repo to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables in Vercel dashboard

## 🖥️ Backend Deployment Options

### Option 1: Same Platform (Netlify Functions/Vercel Functions)

- Convert `server.js` to serverless functions
- Best for simple contact forms

### Option 2: Separate Backend (Railway/Render/Heroku)

- Deploy `server.js` as-is to a Node.js hosting service
- Update API endpoints in frontend to point to backend URL

### Option 3: Traditional VPS (DigitalOcean/Linode)

- Deploy both frontend and backend on same server
- Use PM2 for process management
- Setup Nginx as reverse proxy

## 📋 Pre-Deployment Checklist

- [ ] Environment variables secured (not in Git)
- [ ] API endpoints updated for production
- [ ] Build process tested locally
- [ ] Email service configured
- [ ] Domain/subdomain ready
- [ ] SSL certificate (handled by platforms)

## 🔧 Environment Variables Needed

### Frontend (if using separate backend):

- `VITE_API_URL=https://your-backend-url.com`

### Backend:

- `EMAIL_USER=your-email@gmail.com`
- `EMAIL_PASS=your-app-password`
- `EMAIL_TO=contact@innovative-tech.com`
- `PORT=5000`
- `NODE_ENV=production`
- `FRONTEND_URL=https://your-domain.com`
