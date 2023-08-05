// create web server
// run server: node comments.js
// open browser: http://localhost:3000
// stop server: ctrl + c

// load module
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

// create server
var server = http.createServer(function(req, res) {
    if (req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('./comments.html'));
    } else if (req.method == 'POST') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var post = qs.parse(body);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Your comment is: ' + post['comment']);
        });
    }
});

// listen port
server.listen(3000);
console.log('Server running at http://localhost:3000');