var express = require("express");
var morgan = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();


app.use(morgan('dev'));

app.listen(port, function() {
  console.log("Listening on port " + port);
})

app.get('/', function(req, res) {
  res.send('hello world');
})