var httpObject = require("http");
httpObject.createServer(
	function(request,response) {
response.writeHead(200,{'content-type':'text/plain'});
response.end('Hello World Welcome to Node Js');
	}).listen(8081);
console.log("Server Started.....");