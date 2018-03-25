/**
1. Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
2. System errors
3. User-specified errors
4. Assertion errors
*/
try {

const a = 10;
const c = a+b;
console.log(c);
} catch(err) {
	console.log(err);
}

const fs = require('fs');
fs.readFile('index.js',callBackFunction);
fs.readFile('edd.js',callBackFunction);

function callBackFunction(errro,data) {
	if(errro) {
		console.log("Error Content : ",errro);
		return ;
	}
	console.log("File Content : ",data)
}

