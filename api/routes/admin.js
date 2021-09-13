const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const addVideo=require('../models/addVideo');
const path = require('path');


let options = {root: path.join(__dirname, "../")};
options = {root:path.join(options.root, "../views")};
router.get('/:pas',async (req,res,next)=>{
    if(req.params.pas===process.env.Mongo_pas){
        res.sendFile('sign.html',options);
    }
});

router.post('/:kind', (req,res,next)=>{
    const send=null;
    if(kind==="dfghj"){
        const video=new addVideo({
            _id:mongoose.Types.ObjectId(),
            name:req.body.title,
            arr:[{url:req.body.url,
                title:req.body.title,
                text:req.body.text}]
        });
        send=video;
    }
    
    send
        .save()
        .then(result=>{console.log(result)})
        .catch(err=>{console.log(err)});
});

module.exports=router;