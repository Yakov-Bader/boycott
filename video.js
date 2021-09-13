const mongoose=require('mongoose');

const videosSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    arr:Array
});
module.exports=mongoose.model('videos',videosSchema);