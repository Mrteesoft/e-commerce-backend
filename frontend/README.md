# E-commerce Frontend

A React.js frontend for the e-commerce application with product browsing, cart functionality, and responsive design.

## Features

- Product listing and detail pages
- Category-based filtering
- Shopping cart functionality
- Responsive design with Bootstrap
- Redux state management
- React Router navigation

## Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

4. Configure the backend API URL:
   - Copy `.env.example` to `.env`
   - Update `REACT_APP_API_URL` with your backend URL:
     ```
     REACT_APP_API_URL=https://your-backend-name.onrender.com
     ```

5. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Set environment variables in Netlify dashboard:
   - `REACT_APP_API_URL` = your backend URL

### Environment Variables

- `REACT_APP_API_URL` - Backend API base URL

## Backend Repository

The backend API is available at: https://github.com/Mrteesoft/e-commerce-backend

## Tech Stack

- React.js 18
- Redux Toolkit for state management
- React Router for navigation
- Bootstrap for styling
- Axios for API calls

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## API Integration

The frontend connects to the backend API for:
- Product listing (`GET /api/products`)
- Product details (`GET /api/products/:id`)
- Category filtering (`GET /api/products?category=CategoryName`)

Make sure your backend is deployed and accessible before deploying the frontend.
