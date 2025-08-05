const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'backend/config/config.env' });
} else {
    // Production environment - use environment variables
    require('dotenv').config();
}

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Basic Product API routes (for test requirements)
const basicProduct = require('./routes/basicProductRoute');
app.use('/api', basicProduct);

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is up and Running! ');
    });
}

// error middleware
// app.use(errorMiddleware);

module.exports = app;



















































































































































































































