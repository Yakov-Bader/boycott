const express = require('express');
const mongoose = require('mongoose');
const app=express();

const videoRoutes=require('./api/routes/videos');
const admin=require('./api/routes/admin');

app.use(express.json())

const uri = "mongodb+srv://yakov:"+process.env.Mongo_pas+"@cluster0.irzzw.mongodb.net/myDatabase?retryWrites=true&w=majority";
try {
    mongoose.connect(uri);
} catch (error) {
    console.log(error)
}

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'))

app.set('views','./views')
app.set('view engine','ejs');

app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
})

app.use('/',videoRoutes);
app.use('/admin',admin);

module.exports=app;

