const express = require('express');
const routes = express.Router();
const student = require('./../schema/student');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage:storage});


routes.post ('/addStudent', upload.single('photo'), async(req,res) =>{
    try{
        const data = req.body;
        const base64 = req.file.buffer.toString(('base64'))
        const newStudent = new student({...data, photo: base64});
        await newStudent.save();
        res.status(200).json({message:'Student details added successfully',student:newStudent})

    }catch(err){
        res.status(500).json({message:'Internal Server Error'})
    }

})
module.exports = routes;