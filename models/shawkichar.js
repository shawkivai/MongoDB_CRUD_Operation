const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//Create Schema & Model

const shawkiSchema=new Schema({
   name:String,
   weight:Number
});

const shawkichar=mongoose.model('shawkidb',shawkiSchema);
module.exports=shawkichar;

