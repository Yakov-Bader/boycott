const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const videos=require('../models/video')



router.get('/',async (req,res,next)=>{
    const data= await videos.find({});
    res.render('show',{objs:data})
});
// router.get('/', (req,res,next)=>{
//     res.sendFile(path.join(__dirname+'/views/sign.html'));
// });

router.post('/', (req,res,next)=>{
    // const video=new Video({
    //     _id:mongoose.Types.ObjectId(),
    //     title:req.body.title,
    //     videos:req.body.video
    // });
    // video
    //     .save()
    //     .then(result=>{console.log(result)})
    //     .catch(err=>{console.log(err)});
});

module.exports=router;