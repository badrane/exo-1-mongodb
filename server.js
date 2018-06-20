const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
app.use(express.static('public'));

var url = 'mongodb://localhost:27017/badrane';

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