const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const videos=require('../models/video')



router.get('/',async (req,res,next)=>{
    const data= await videos.find({});
    res.render('show',{objs:data})
});
router.get('/:sub',async (req,res,next)=>{
    const list= await videos.find({name:req.params.sub});
    res.render('main',{obj:list})
});

router.post('/', (req,res,next)=>{
    
});

module.exports=router;