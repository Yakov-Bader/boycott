/* this page is use, it is just for playing around

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const port = process.env.port || 3000;
let data=[];

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'))

app.set('views','./views')
app.set('view engine','ejs');

app.get('/sign',(req, res) => {
    res.sendFile(path.join(__dirname+'/views/sign.html'));
});

app.post('/add',(req, res) => {
  
  res.send(req.body);
});
app.get('/',async (req, res) => {
  const client = new MongoClient(uri);
  
  data=[];
  try {
    await mongoose.connect(uri);
    await getList(mongoose);
  }catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

  res.render('show',{objs:data})
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// async function findListings(client,name){
//   for(let i=0;i<name.length;i++){
//     let result = await client.db("myDatabase").collection(name[i]).find({}).toArray();
//     let obj={};
//     obj.name=name[i];
//     obj.info=result;
//     data.push(obj);
//   };
// }

async function getList(client){
  let list =await client.db("myDatabase").collection('videos').find({}).toArray();
  console.log(list);
  data=list;
  //const database=await client.db("myDatabase").listCollections().toArray();
  https://boycott-israel.herokuapp.com/
  http://localhost:3000/

  about us
  Terms of Service
}*/
