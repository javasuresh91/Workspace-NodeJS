/* NOTES : All the below  methods will run Asynchrously, so the output cannot be predict  */

/** 
setInterval(): It is used to define a time interval.
 and time interval of 1000 millisecond and the specified comment will be displayed after every 1000 millisecond until you terminate.
*/
setInterval(function() {
	console.log("setInterval Example......");
},1000);

/* This is another Example of using setInterval */
// var i=0;
// console.log(i);
// setInterval(function() {
// 	i++;
// 	console.log(i);
// },1000);

/** 
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.
*/
setTimeout(function() {
console.log("Example of Time out...,");
},1000);

/**
recursion using setTimeout
*/
var repeatFunction = function() {
	console.log("recursion calling using setTimeout");
	setTimeout(repeatFunction,1000);
}

repeatFunction();


