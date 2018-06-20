const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const assert = require('assert');
var url = 'mongodb://localhost:27017/badrane';


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));


app.post('/add', function(req, res){
    var name = req.body.name;
    console.log(name);
    var genre = req.body.genre;
    console.log(genre);
    MongoClient.connect(url, function(err, db){
        assert.equal(null, err)
        console.log("Connected successfully to server");
        var dbo = db.db("badrane");
        var ajout = {name : name, genre : genre};
        dbo.collection("personnages").insertOne(ajout, function(err, data){
            if (err) throw err;
            console.log(data);
            res.send(data)
            db.close();
          }); 
    });

})

app.get('/test', function(req,res){
    MongoClient.connect(url, function(err, db){
        assert.equal(null, err)
        console.log("Connected successfully to server");
        var dbo = db.db("badrane");
        dbo.collection("personnages").find({}).toArray(function(err, data){
            if (err) throw err;
            console.log(data);
            res.send(data)
            db.close();
          }); 
    });
})



app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(3013, function(){
    console.log('ok');
})