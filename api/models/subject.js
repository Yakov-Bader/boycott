const mongoose=require('mongoose');

const addSubjectSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    arr:[{
        url:String,
        title:String,
        text:String
    }]
},{collection:"videos"});
module.exports=mongoose.model('addSubject',addSubjectSchema);