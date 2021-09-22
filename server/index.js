const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var app = express();

app.use(cors());

app.listen('3001',() => {
    console.log("server listening 3001 port");
})

app.get('/',function(req, res){
    res.send("Hello From Server");
})

app.post('/insert', (req, res) => { 
    console.log(req);
 })