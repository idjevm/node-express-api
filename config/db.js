// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        ); 
        console.log('MongoDB is Connected...');
    } catch(err) {
        console.error(err.message); 
        process.exit(1);
    }
}; 

module.exports = connectDB; 