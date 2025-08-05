const fs = require('fs');
const path = require('path');

// Load products data from JSON file
const loadProducts = () => {
    try {
        const dataPath = path.join(__dirname, '../data/products.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading products data:', error);
        return [];
    }
};

// Save products data to JSON file
const saveProducts = (products) => {
    try {
        const dataPath = path.join(__dirname, '../data/products.json');
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving products data:', error);
        return false;
    }
};

// GET /products - Return all products or filter by category
exports.getProducts = (req, res) => {
    try {
        let products = loadProducts();
        
        // Filter by category if provided
        const { category } = req.query;
        if (category) {
            products = products.filter(product => 
                product.category.toLowerCase() === category.toLowerCase()
            );
        }
        
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// GET /products/:id - Return single product by ID
exports.getProductById = (req, res) => {
    try {
        const products = loadProducts();
        const { id } = req.params;
        
        const product = products.find(p => p.id === id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// POST /products - Add new product (bonus endpoint)
exports.createProduct = (req, res) => {
    try {
        const products = loadProducts();
        
        // Basic validation
        const { name, description, price, category, brand } = req.body;
        
        if (!name || !description || !price || !category || !brand) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, description, price, category, brand'
            });
        }
        
        // Validate price is a number
        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Price must be a positive number'
            });
        }
        
        // Generate new ID
        const newId = (Math.max(...products.map(p => parseInt(p.id))) + 1).toString();
        
        // Create new product
        const newProduct = {
            id: newId,
            name: name.trim(),
            description: description.trim(),
            price: parseFloat(price),
            category: category.trim(),
            brand: brand.trim(),
            stock: req.body.stock || 0,
            imageUrl: req.body.imageUrl || '',
            ratings: 0,
            numOfReviews: 0
        };
        
        // Add to products array
        products.push(newProduct);
        
        // Save to file
        if (saveProducts(products)) {
            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                data: newProduct
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Failed to save product'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};
