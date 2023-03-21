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

app.get("/serversiderendering", (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head><title>My app</title></head>
        <body>
        <p>This content is being served by the server.</p>
        <nav id="navigation"></nav>
        <p>This paragraph is also a part of HTML.</p>
        <div>
            <Button variant="contained">Hello World</Button>
        </div>
        </body>
        </html>
    `
    res.send(html);
});

//alt syntax using bodied function
/*app.get('/', function (req, res) {
    res.send('Hello World from GCE!');
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000, now improved!');
});