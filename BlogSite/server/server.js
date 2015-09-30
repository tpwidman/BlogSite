/* Require node modules to implement */
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var app = require('./app.js');


var server = http.createServer(app.handleRequests);

/*Requests are completed over port numbers and each one needs a unique number. Most port numbers between 0 - 1024 are reserved so here 3000 is a standard testing port to use. More on port numbers: https://en.wikipedia.org/wiki/Port_(computer_networking) */
var port = 3000;

server.listen(port);
console.log('Listening on port', port);
