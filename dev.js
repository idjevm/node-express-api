require('dotenv').config(); // load env vars from .env file
const express = require('express');
const bookRoute = require('./routes/book');
const connectDB = require('./config/db'); 
// import other routes...

// Connect to MongoDB
connectDB();
const app = express();
// add all of the routes in the API here
app.get('/', (req, res) => res.send('Hello JV!'));

app.use('/books', bookRoute);
// ...more routes here...
app.listen(process.env.PORT || 5000);