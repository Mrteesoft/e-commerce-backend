# Deployment Guide - Render

## Backend Deployment on Render

### Step 1: Render Configuration

When creating a new Web Service on Render, use these settings:

**Build & Deploy Settings:**
- **Build Command**: `npm install` (or leave empty, Render auto-detects)
- **Start Command**: `npm start`
- **Node Version**: Use default (latest)

**Environment Variables:**
- `NODE_ENV` = `production`
- `PORT` = `4000` (optional, Render will set this automatically)

**Alternative: Use render.yaml (Recommended)**
The repository includes a `render.yaml` file that automatically configures:
- Build command: `npm install`
- Start command: `npm start`
- Environment variables

### Step 2: Repository Setup

Make sure your GitHub repository has:
- ✅ Updated package.json with proper start script
- ✅ Backend code in `/api` directory
- ✅ Environment configuration

### Step 3: Deploy

1. Connect your GitHub repository to Render
2. Select the branch (main)
3. Configure the settings above
4. Click "Create Web Service"

### Step 4: Test Deployment

Once deployed, test these endpoints:
- `GET /` - Should return "Server is up and Running!"
- `GET /api/products` - Should return product list
- `GET /api/products/1` - Should return single product

### Frontend Integration

To connect your frontend to the deployed backend:

1. Update your frontend API calls from:
   ```javascript
   fetch("http://localhost:4000/api/products")
   ```

2. To your Render URL:
   ```javascript
   fetch("https://your-app-name.onrender.com/api/products")
   ```

### Environment Variables (Optional)

If you need additional configuration, add these in Render dashboard:

```
SENDGRID_API_KEY=your_sendgrid_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Troubleshooting

**Common Issues:**

1. **"Cannot find module 'express'" Error**
   - ✅ Fixed: Added all required dependencies to package.json
   - ✅ Fixed: Created render.yaml with proper build command
   - Solution: Render now runs `npm install` before starting

2. **Build fails with "react-scripts not found"**
   - ✅ Fixed: Updated package.json build script

3. **Port binding issues**
   - ✅ Fixed: Using process.env.PORT

4. **CORS errors**
   - ✅ Fixed: CORS middleware already added

5. **Environment variables not loading**
   - Add them in Render dashboard under Environment tab

6. **Dependencies not installing**
   - Check that package.json has all required dependencies
   - Verify build command is set to `npm install`
   - Check build logs for specific error messages

### Expected Deployment URL

Your backend will be available at:
`https://your-service-name.onrender.com`

### API Endpoints

- `GET /` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products?category=Apparel` - Filter by category
- `POST /api/products` - Create new product
