// Main server file
require('dotenv').config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const babysitterRoutes = require('./routes/babysitters');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/babysitter-app';

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully!');
})
.catch((error) => {
    console.error('❌ MongoDB connection error:', error);
});

// Define port for server
const PORT = process.env.PORT || 3001;

// Import routes
const babysitterRoutes = require('./routes/babysitters');

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Babysitter API' });
});

// Use routes
app.use('/api/babysitters', babysitterRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📱 Frontend can connect to: http://localhost:${PORT}`);
});