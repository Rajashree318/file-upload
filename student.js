const mongoose = require('mongoose');
const { type } = require('os');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo:{
        type:String,
        
    }
})
const Student = mongoose.model('Student',studentSchema,'student')
module.exports = Student;