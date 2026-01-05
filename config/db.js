const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://netninja:test1234@cluster0.v2wkz2s.mongodb.net/sano")
        console.log('MongoDB connected Successfully');
    }
    catch (err) {
        console.error(err.message);
        
    }  
}

module.exports = connectDB;