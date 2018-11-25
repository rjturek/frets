/**
 * Created by rjt on 12/14/13.
 */
//var http = require('http');
//var fs = require('fs');
//var index = fs.readFileSync('frets.html');
//
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end(index);
//}).listen(9615);
//console.log('Server running at http://127.0.0.1:9615/');

var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(process.env.PORT );
console.log('Hey, we are listening on: ' + process.env.PORT );
