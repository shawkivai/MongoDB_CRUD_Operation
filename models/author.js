const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//Create Schema & Model

const authorSchema=new Schema({
    name:String,
    Age:Number,
    books:['bookSchema']
});

const bookSchema=new Schema({
    title:String,
    pages:Number
});

const Author=mongoose.model('author',authorSchema);
module.exports=Author;

