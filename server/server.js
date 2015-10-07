/* Require node modules to implement */
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

function getFileExtension(route) {
    var arr = route.split('.');
    if(arr.length<=1) {
        return 'html'
    }
    return arr[arr.length -1].toLowerCase();
}

function handleRequests(req, res) {
    var header;
    var route = url.parse(req.url).path;
    if(route === '/') {
        route = '/index.html';
    }
    var ext = getFileExtension(route);
    switch (ext) {
        case 'css':
            header = {
                'Content-Type': 'text/css'
            };
            break;
        case 'js':
            header = {
                'Content-Type': 'application/javascript'
            };
            break;
        case 'html':
            header = {
                'Content-Type': 'text/html'
            };
            break;
        default:
            header = {
                'Content-Type': 'application/json'
            };
            break;
    }

    
    var filePath;
        
       filePath = path.join(__dirname, '../client' + route);
        readFile(filePath, function(data){
            writeResponse(res, data, header)    
        });
}


function writeResponse(res, data, header) {
    var statusCode = statusCode || 200;
    res.writeHead(statusCode, header);
    res.end(data);
}

function readFile(filePath, callBack) {
    fs.readFile(filePath, function (err, data) {
        callBack(data);
    });
}

var server = http.createServer(handleRequests);
var port = 3000;

server.listen(port);
console.log('Listening on port', port);

/*createServer takes in a function to handle requests.
Here is where you can create a handler for get and post requests.
Note: req(request) and res(response) come from node's http module.
They include both incoming information like urls and outgoing like content */

/*In order to complete the project, this callback will need to handle
get requests, post requests and serve up other files like css.
Hint: creating a function to replace the anonymous function may be useful.
		EXAMPLE:
		function requestHandler(req, res) {
			if(request url === '/'){
				// handle this way
			} else if(request url === '/messages'){
				if(request method  === 'GET'){
					// handle this way
				}
				...
		};
		var server = http.createServer(requestHandler)   */
