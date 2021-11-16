const express=require('express');
const router=express.Router();
const videos=require('../models/video')
const mongoose=require('mongoose')
const Subject=require('../models/subject');
const path = require('path');

let options = {root: path.join(__dirname, "../")};
options = {root:path.join(options.root, "../views")};

router.get('/:pas',async (req,res,next)=>{
    let options = {root: path.join(__dirname, "../")};
    options = {root:path.join(options.root, "../views")};
    if(req.params.pas===process.env.Mongo_pas){
        res.sendFile('admin.html',options);
    }else{
        res.json({"error":"this page does not exist","home page link:":"https://boycott-israel.herokuapp.com/"});
    }
});

router.post('/subject', (req,res,next)=>{
    if(req.body.submit==="SUBMIT"){
        const subject=new Subject({
            _id:mongoose.Types.ObjectId(),
            name:req.body.Mtitle,
            arr:[]
        });
        subject
            .save()
            .then((result)=>{
                res.status(201).json({
                    massage:'good post for',
                    created:result})
            })
            .catch((error)=>{
                res.status(500).json({
                    error:error
                })
            });
    }else if(req.body.submit==="DELETE"){
        Subject.remove({
            name:req.body.Mtitle
        })
        .exec()
        .then((result)=>{
            res.status(201).json({
                massage:'good post for',
                created:result})
        })    
        .catch((error)=>{
            res.status(500).json({
                error:error
            })
        });
    }
    
});

router.post('/video', (req,res,next)=>{
    if(req.body.submit==="SUBMIT"){
        Subject.update(
            { name: req.body.subject }, 
            { $push: { arr: {url:req.body.id,title:req.body.title, text:req.body.text} } },
            {new: true, upsert: true }
        )
        .exec()
        .then((result)=>{
            res.status(201).json({
                massage:'good post for',
                created:result})
        })    
        .catch((error)=>{
            res.status(500).json({
                error:error
            })
        });

    }else if(req.body.submit==="DELETE"){
        Subject.update(
            { name: req.body.subject }, 
            { $pull: { arr: {url:req.body.id,title:req.body.title, text:req.body.text} } },
            {new: true, upsert: true }
        )
        .exec()
        .then((result)=>{
            res.status(201).json({
                massage:'good post for',
                created:result})
        })    
        .catch((error)=>{
            res.status(500).json({
                error:error
            })
        });
    }
});

module.exports=router;