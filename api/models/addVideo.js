const mongoose=require('mongoose');

const addVideosSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    arr:[{url:String,
        title:String,
        text:String}]
});
module.exports=mongoose.model('addVideo',addVideosSchema);