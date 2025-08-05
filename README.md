# E-commerce Full-Stack Application

A complete e-commerce application with React frontend and Node.js backend API.

## Features

### Backend API
- RESTful Product API
- Category-based filtering
- JSON file-based data storage
- Input validation and error handling
- CORS support for frontend integration

### Frontend
- React.js application
- Product listing and detail pages
- Category filtering
- Shopping cart functionality
- Responsive design with Bootstrap

## API Endpoints

### Products

- `GET /api/products` - Get all products or filter by category
- `GET /api/products/:id` - Get single product by ID
- `POST /api/products` - Create new product

## Installation

Clone the project

```bash
git clone https://github.com/Mrteesoft/e-commerce-backend.git
```

Go to the project directory

```bash
cd e-commerce-backend
```

Install dependencies

```bash
npm install --legacy-peer-deps
```

Start the full application (both backend and frontend)

```bash
npm start
```

This will start:
- Backend API server at: `http://localhost:4000`
- Frontend React app at: `http://localhost:3000`

Or start them separately:

```bash
# Backend only
npm run server

# Frontend only
npm run client
```

## Usage Examples

### Get all products
```bash
curl -X GET http://localhost:4000/api/products
```

### Filter by category
```bash
curl -X GET "http://localhost:4000/api/products?category=Apparel"
```

### Get single product
```bash
curl -X GET http://localhost:4000/api/products/1
```

### Create new product
```bash
curl -X POST http://localhost:4000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Product Name",
    "description": "Product description",
    "price": 99.99,
    "category": "Electronics",
    "brand": "Brand Name",
    "stock": 50
  }'
```

## Tech Stack

### Backend
- Node.js
- Express.js
- JSON file storage

### Frontend
- React.js
- Redux for state management
- Bootstrap for styling
- React Router for navigation

## Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Base**: http://localhost:4000/api
