var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname+'/views');
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('index');
})

app.post('/rabbits',function(req, res){
    console.log(req.body);
    if (req.body.name.length > 1){
        res.json({ data : req.body });
        // res.sendFile(__dirname+'/views/new_rabbit.ejs', { data : req.body });
    }
    else {
        res.status(404);
        res.sendFile(__dirname+'/views/error.ejs');
    }
})

app.listen(8000, function(){
    console.log('listening on port 8000');
});
