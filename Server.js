const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'))
const PORT= process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    const data= {
        pageTitle: "Welcome to my Page"
    };
    res.render('index',data);

});
app.get('/about',(req, res)=>{
    res.render('about');
});
app.get('/projects',(req, res) =>{
    res.render('projects');
});
app.get('/WIP',(req, res) =>{
    res.render('WIP');
});
app.use(express.static('public'));

app.post("/submitform",(req, res)=>{
    res.send("Form Submitted Sucessfully!");
});

app.listen(PORT,() => {
    console.log("Server is running on port ", PORT);
});
