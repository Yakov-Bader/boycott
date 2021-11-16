const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const videos=require('../models/video')

router.get('/',async (req,res,next)=>{
    const data= await videos.find({});
    res.render('show',{objs:data})
});
router.get('/:sub',async (req,res,next)=>{
    let tit=[];
    const titles= await videos.find({});
    titles.forEach((obj)=>{
        tit.push(obj.name);
    });
    const list=await videos.find({name:req.params.sub});
    if(list.length==0){
        const data= await videos.find({});
        res.render('show',{objs:data})
    }
    res.render('main',{names:tit,obj:list})
});

router.post('/', (req,res,next)=>{
    
});

module.exports=router;