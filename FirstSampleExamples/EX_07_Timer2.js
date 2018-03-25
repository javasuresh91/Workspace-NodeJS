var methodOne= function() {
	console.log("Welcome To SetInterval......");
}
var methodTwo = function() {
console.log("Welcome To Set Timeout......");	
}


var d1=setInterval(methodOne,1000);
var d2=setTimeout(methodTwo,1000);

setTimeout(function(){
	console.log("Clear the timing");
clearInterval(d1);	
clearTimeout(d2)
},3000);
