/*
*	Running the Server using Express to host the index.html post so that chrome doesn't block the media access.
*	Running the Server in port number 4000.
*/

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
})