# E-commerce Backend API - Postman Collection

This repository includes a comprehensive Postman collection for testing the E-commerce Backend API.

## 📁 Collection File

**File**: `E-commerce_Backend_API.postman_collection.json`

## 🚀 Quick Setup

### 1. Import Collection
1. Open Postman
2. Click "Import" button
3. Select the `E-commerce_Backend_API.postman_collection.json` file
4. Collection will be imported with all endpoints and tests

### 2. Environment Variables
The collection uses the following variable:
- `baseUrl`: Set to `http://localhost:4000` (default)

To change the base URL:
1. Go to Collection → Variables tab
2. Update `baseUrl` value (e.g., for production: `https://your-api.onrender.com`)

## 📋 Available Endpoints

### **Health Check**
- **GET** `/` - Server health check
- **Tests**: Status code, server running message

### **Product Endpoints**

#### **Read Operations**
1. **GET** `/api/products` - Get all products
   - **Tests**: Response structure, product fields validation
   
2. **GET** `/api/products/{id}` - Get single product by ID
   - **Example**: `/api/products/1`
   - **Tests**: Single product response, required fields

3. **GET** `/api/products/{invalid_id}` - Test error handling
   - **Example**: `/api/products/999`
   - **Tests**: 404 status, error message

4. **GET** `/api/products?category={category}` - Filter by category
   - **Examples**: 
     - `/api/products?category=Apparel`
     - `/api/products?category=Electronics`
   - **Tests**: Category filtering, response validation

#### **Write Operations**
5. **POST** `/api/products` - Create new product (Valid Data)
   - **Tests**: Creation success, response structure
   - **Sample Payload**:
   ```json
   {
     "name": "Premium Wireless Headphones",
     "description": "High-quality wireless headphones...",
     "price": 199.99,
     "category": "Electronics",
     "brand": "AudioTech",
     "stock": 50,
     "imageUrl": "https://images.unsplash.com/photo-..."
   }
   ```

6. **POST** `/api/products` - Create product (Invalid Data)
   - **Tests**: Validation error handling
   - **Sample Invalid Payload**:
   ```json
   {
     "name": "",
     "price": "invalid_price"
   }
   ```

## 🧪 Test Coverage

### **Automated Tests Include:**
- ✅ HTTP status code validation
- ✅ Response structure validation
- ✅ Data type validation
- ✅ Required field presence
- ✅ Category filtering accuracy
- ✅ Error handling verification
- ✅ Success message validation

### **Test Results:**
Each request includes comprehensive test scripts that verify:
- Response status codes (200, 201, 400, 404)
- JSON response structure
- Data integrity and types
- Business logic validation

## 🏃‍♂️ Running the Tests

### **Individual Request:**
1. Select any request from the collection
2. Click "Send"
3. View test results in the "Test Results" tab

### **Run Entire Collection:**
1. Click on collection name
2. Click "Run" button
3. Select all requests
4. Click "Run E-commerce Backend API"
4. View comprehensive test report

### **Expected Results:**
- ✅ All tests should pass when backend is running
- ✅ Total requests: 7
- ✅ Total tests: ~20 test assertions

## 🔧 Customization

### **Adding New Endpoints:**
1. Right-click collection → "Add Request"
2. Configure method, URL, headers, body
3. Add test scripts in "Tests" tab

### **Modifying Base URL:**
- **Local Development**: `http://localhost:4000`
- **Production**: Update `baseUrl` variable to your deployed URL

### **Adding Authentication:**
If your API requires authentication:
1. Go to Collection → Authorization tab
2. Select auth type (Bearer Token, API Key, etc.)
3. Configure credentials

## 📊 Sample Test Output

```
✓ Status code is 200
✓ Response has success field
✓ Response contains products array
✓ Products have required fields
✓ All products are Apparel category
✓ Product created successfully
✓ Validation error response
```

## 🐛 Troubleshooting

### **Common Issues:**

1. **Connection Refused**
   - Ensure backend server is running on `http://localhost:4000`
   - Check `baseUrl` variable in collection

2. **Tests Failing**
   - Verify API response format matches expected structure
   - Check if backend data has changed

3. **CORS Errors**
   - Backend includes CORS middleware
   - Should not affect Postman requests

## 📝 Notes

- Collection is configured for the current API structure
- Tests assume specific product data exists (ID: 1, categories: Apparel, Electronics)
- Modify test expectations if backend data changes
- Collection includes both positive and negative test cases

## 🔄 Updates

When API changes:
1. Update request URLs/methods
2. Modify request payloads
3. Update test assertions
4. Re-export collection

---

**Happy Testing!** 🚀
