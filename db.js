const mongoose = require('mongoose');
require('dotenv').config();

const mongoDbUrl ='mongodb://localhost:27017/file-upload';
mongoose.connect(mongoDbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
db.on('disconnected',()=>{
    console.log('MongoDb disconnected')
})
module.exports = db;