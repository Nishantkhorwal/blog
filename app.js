const express = require ("express"); 
const { default: mongoose } = require("mongoose");
const bodyparser= require("body-parser");
const path= require('path');
const app = express();
const port = 80;
mongoose.connect("mongodb://127.0.0.1/contactblog",{useNewUrlParser: true});
const contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String,
    concern:String
});
var contact= mongoose.model('contacts',contactSchema);
app.use('/static', express.static('static'))
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('home.pug',params)
})
app.post('/',(req,res)=>{
    var mydata= new contact(req.body);
    mydata.save().then(()=>{
        res.send("This item has been saved")
    }).catch(()=>{
        res.send("Item was not saved")
    })
})
app.get('/about',(req,res)=>{
    const params={ }
    res.render('about.pug',params)
})
app.get('/music',(req,res)=>{
    const params={ }
    res.render('music.pug',params)
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});