const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

// Import Routes
const productRoute = require('./routes/api/productRoute');

// Set up MongoDB URI
let mongodb_url = 'mongodb://app-mongo:27017/';
let dbName = 'yolomy';

// Using the MongoDB URI from the environment variables
const MONGODB_URI = process.env.MONGODB_URI || `${mongodb_url}${dbName}`;

// Connecting to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));

// Initializing Express
const app = express();

// Body parser middleware
app.use(express.json());

// Enable file uploads
app.use(upload.array());

// Enable CORS
app.use(cors());

// Use Routes
app.use('/api/products', productRoute);

// Define the PORT from environment variables, fallback to 5000 if not provided
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
