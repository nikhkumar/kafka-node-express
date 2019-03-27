var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World [GET]');
})

app.post('/', function (req, res) {

    console.log(req.body);

    if (!req.body) 
        return res.sendStatus(200);
    res.send('welcome, ' + req.body)

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})