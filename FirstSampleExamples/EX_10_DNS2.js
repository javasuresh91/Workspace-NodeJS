const domainNamingSystem = require('dns');

/** Method One*/

domainNamingSystem.resolve4('www.javatpoint.com',(err,addresses)=>{
	if(err) {
		console.log(err);
	}
	console.log(JSON.stringify(addresses));
	addresses.forEach((a) => {
		domainNamingSystem.reverse(a,findHostName);
	});
});
function findHostName(err,hostName) {
	if (err) {  
        throw err;  
      }  
      console.log(`reverse for : ${JSON.stringify(hostName)}`);  
}

/** Method Two*/

domainNamingSystem.lookup('www.javatpoint.com',function(err,address){
console.log("IP Address : ",address);
	domainNamingSystem.reverse(address,function show(err,hostName){
console.log(`Domain : ${JSON.stringify(hostName)}`);  
	});
});