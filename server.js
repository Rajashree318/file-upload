const express = require('express');
const app = express();
const db = require('./db')
const studentRoutes = require('./routes/studentRoutes')
const bodyParser = require('body-parser');


app.use('/', studentRoutes)

app.listen(4000,()=>{
    console.log('Server is running on port number 4000')
})