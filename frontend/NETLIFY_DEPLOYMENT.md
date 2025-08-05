# Netlify Deployment Guide

## Quick Deployment Steps

### Method 1: Drag & Drop (Recommended for first deployment)

1. **Build the project locally:**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `build` folder to Netlify
   - Your site will be deployed instantly!

### Method 2: Git Integration (Recommended for continuous deployment)

1. **Connect GitHub Repository:**
   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository

2. **Configure Build Settings:**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

3. **Set Environment Variables:**
   - Go to Site Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-name.onrender.com`

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy

## Important Configuration

### Environment Variables

Make sure to set these in Netlify:

```
REACT_APP_API_URL=https://your-backend-name.onrender.com
```

### Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `frontend/build`
- **Base directory**: `frontend`

### Custom Domain (Optional)

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Common Issues:

1. **Build fails with "react-scripts not found"**
   - Make sure Base directory is set to `frontend`
   - Check that package.json is in the frontend folder

2. **API calls fail (CORS errors)**
   - Verify `REACT_APP_API_URL` environment variable
   - Make sure backend is deployed and accessible
   - Check backend CORS configuration

3. **Routing issues (404 on refresh)**
   - Add `_redirects` file in `public` folder:
     ```
     /*    /index.html   200
     ```

4. **Environment variables not working**
   - Make sure they start with `REACT_APP_`
   - Redeploy after adding environment variables

## Testing Deployment

After deployment, test these features:
- ✅ Homepage loads
- ✅ Products page shows products from backend
- ✅ Category filtering works
- ✅ Individual product pages load
- ✅ Shopping cart functionality works

## Updating Deployment

### For Drag & Drop Method:
1. Run `npm run build` locally
2. Drag new build folder to Netlify

### For Git Integration:
1. Push changes to GitHub
2. Netlify automatically rebuilds and deploys

## Performance Optimization

Netlify automatically provides:
- ✅ CDN distribution
- ✅ HTTPS certificates
- ✅ Gzip compression
- ✅ Asset optimization

## Custom Build Commands

If you need custom build commands, you can create a `netlify.toml` file:

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = "frontend/build"

[build.environment]
  REACT_APP_API_URL = "https://your-backend-name.onrender.com"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

Your frontend will be available at: `https://your-site-name.netlify.app`
