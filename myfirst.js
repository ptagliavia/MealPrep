const express = require('express');
const app = express();

app.get('/', (reg,res) => {
    res.send({hi: 'there'})
});


//alt syntax using bodied function
/*app.get('/', function (req, res) {
    res.send('Hello World from GCE!');
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000, now improved!');
});