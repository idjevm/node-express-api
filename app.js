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

// const allowedOrigins = ['http://localhost:3000',
//                       'http://yourapp.com'];

// app.use(
//     cors({
//         origin: function (origin, callback) {
//             // allow requests with no origin 
//             // (like mobile apps or curl requests)
//             if (!origin) return callback(null, true);
//             if (allowedOrigins.indexOf(origin) === -1) {
//                 var msg = 'The CORS policy for this site does not ' +
//                     'allow access from the specified Origin.';
//                 return callback(new Error(msg), false);
//             }
//             return callback(null, true);
//         }
//     }));

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