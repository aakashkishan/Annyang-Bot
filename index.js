/*
*	Running the Server using Express to host the index.html post so that chrome doesn't block the media access.
*	Running the Server in port number 4000.
*/

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('index.html');
})

app.listen(4000, function () {
  console.log('Example app listening on port 3000!')
})