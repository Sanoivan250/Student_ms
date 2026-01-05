const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
     contact:{
        type:Number,
        required:true
    },


})
module.exports = mongoose.model('Student',StudentSchema);

