var domainNamingSystem = require('dns');

/*Method One :*/
domainNamingSystem.lookup('www.javatpoint.com',getInfo);
domainNamingSystem.lookup('www.abce465.com',getInfo);
function getInfo(err, addresses, family) {
if(err) {
	console.log('Error of DNS :',err);
	return;
}
  console.log('addresses:', addresses);  
  console.log('family:',family); 
}

/*Method two :*/
domainNamingSystem.lookup('www.google.co.in',function(err, addresses, family) {
if(err) {
	console.log('Error of DNS :',err);
	return;
}
  console.log('addresses:', addresses);  
  console.log('family:',family); 
});

/** Method three : */
domainNamingSystem.lookup('www.google.co.in',(err, addresses, family)=>{

if(err) {
	console.log('Error of DNS :',err);
	return;
}
  console.log('addresses:', addresses);  
  console.log('family:',family); 

});