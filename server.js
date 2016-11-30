var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/warren_db');

var RabbitSchema = new mongoose.Schema({
    name : String,
    breed : String,
    dob : Date
});

var Rabbit = mongoose.model('Rabbit', RabbitSchema);


app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname+'/views');
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/',function(req, res){
    Rabbit.find({}, function(err, allRabbits){
    console.log(allRabbits);
    res.render('warrenlist.ejs',{allRabbits : allRabbits});
    });
})

app.post('/rabbits',function(req, res){
    console.log(req.body);
    if (req.body.name.length > 1){
        Rabbit.create(req.body, function(err, newrabbit){
            console.log(newrabbit);
            res.json(newrabbit);
        })
    }
    else {
        res.status(404);
        res.sendFile(__dirname+'/views/error.ejs');
    }
})

app.get('/rabbit/:id',function(req, res){

})

app.get('/rabbit/edit/:id',function(req, res){

})

app.get('/rabbit/new',function(req, res){

})

app.post('/rabbit/:id',function(req, res){

})

app.post('/rabbit/destroy/:id',function(req, res){

})

app.listen(8000, function(){
    console.log('listening on port 8000');
});
