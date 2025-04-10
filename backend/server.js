const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
// Use the MongoDB service name from docker-compose (e.g., app-mongo)
let mongodb_url = 'mongodb://app-mongo:27017/';
let dbName = 'yolomy';

const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('Database connected successfully');
});

// Check for DB Errors
db.on('error', (error) => {
    console.error('Database connection error:', error);
});

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

// Enable file uploads
app.use(upload.array());

// Enable CORS
app.use(cors());

// Use Routes
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
