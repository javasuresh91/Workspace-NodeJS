var net = require('net');
var server = net.createServer((socket)=>{
	socket.end('goodbye\n');  
}).on('error',(err)=>{
// handle errors here  
	console.log(err);
  throw err;  
});