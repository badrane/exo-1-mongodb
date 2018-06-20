const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


var url = 'mongodb://localhost:27017/badrane';

MongoClient.connect(url, function(err, db){
    assert.equal(null, err)
    console.log("Connected successfully to server");
    var dbo = db.db("badrane");
    dbo.collection("personnages").find({}).toArray(function(err, data){
        if (err) throw err;
        console.log(data);
        db.close();
      }); 
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(3013, function(){
    console.log('ok');
})