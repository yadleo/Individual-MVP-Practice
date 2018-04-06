var express = require('express');
var app = express();

app.get('/api', function(req, res) {
  res.send('Welcome to the api');
});

app.get('/', function(req, res) {
  res.send('hello bitches');
});

var port = 8080;
app.listen(port, function() {
  console.log('listening on port: ', port);
});
