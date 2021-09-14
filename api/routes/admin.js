const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const Subject=require('../models/subject');
const path = require('path');

let options = {root: path.join(__dirname, "../")};
options = {root:path.join(options.root, "../views")};

router.get('/:pas',async (req,res,next)=>{
    if(req.params.pas===process.env.Mongo_pas){
        let options = {root: path.join(__dirname, "../")};
        options = {root:path.join(options.root, "../views")};
        res.sendFile('admin.html',options);
    }
});

router.post('/subject', (req,res,next)=>{
    if(req.body.submit==="SUBMIT"){
        const subject=new Subject({
            _id:mongoose.Types.ObjectId(),
            name:req.body.Mtitle,
            arr:[{
                url:req.body.url,
                title:req.body.title,
                text:req.body.text
            }]
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
            _id:req.body.id,
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
            { _id: req.body.id }, 
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
        
    }
});

module.exports=router;