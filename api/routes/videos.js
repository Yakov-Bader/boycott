const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const videos=require('../models/video')



router.get('/',async (req,res,next)=>{
    const data= await videos.find({});
    res.render('show',{objs:data})
});


router.post('/', (req,res,next)=>{
    
});

module.exports=router;