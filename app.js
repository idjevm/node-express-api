// app.js
require('dotenv').config(); // load env vars from .env file
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Setting PORT 
const PORT = process.env.PORT;

// routes // add all of the routes in the API here
const bookRoute = require('./routes/books');
// import other routes...

// Start app
const app = express();

// Connect to MongoDB
connectDB();

// cors
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello JV!'));

// use Routes
app.use('/api/books', bookRoute);
// ...more routes here...

app.listen(PORT, () => console.log(`Server is now running on port: ${PORT}`));