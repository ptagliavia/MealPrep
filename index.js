const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ptagliaviadev:KWXwicwGwvPFOGL6@cluster0.xqxsnzj.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (reg,res) => {
    res.send({hi: 'there'})
});

app.get('/', (reg,res) => {
    res.send({hi: 'there'})
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

//alt syntax using bodied function
/*app.get('/', function (req, res) {
    res.send('Hello World from GCE!');
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000, now improved!');
});