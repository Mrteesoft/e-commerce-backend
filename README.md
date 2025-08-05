# E-commerce Backend API

A RESTful API for an e-commerce platform built with Node.js and Express.js.

## Features

- RESTful Product API
- Category-based filtering
- JSON file-based data storage
- Input validation and error handling
- CORS support for frontend integration

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

Start the backend server

```bash
npm start
```

The API server will be running at: `http://localhost:4000`

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

- Node.js
- Express.js
- JSON file storage

## Project Structure

```
├── api/                 # Backend API (Node.js + Express)
├── frontend/           # Frontend React Application
├── package.json        # Backend dependencies
└── README.md          # This file
```

## Deployment

### Backend
This backend is deployed on Render at: [Your Render URL]

### Frontend
The React frontend is located in the `/frontend` folder and can be deployed to Netlify:

1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install --legacy-peer-deps`
3. Update the API URL in `frontend/.env`
4. Build: `npm run build`
5. Deploy the `build` folder to Netlify

## Frontend Setup

See `frontend/README.md` for detailed frontend setup instructions.
