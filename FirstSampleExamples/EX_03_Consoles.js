const name="Suresh";

/* Use to display the Message in the Console */
console.log("\n","Hai.., This Log"," Console");

/* display the formatted Message */
console.log("\n",'Hello %s' ,"This Formatted Console");

console.log("\n",`This is parametereized Message Mr.${name}`);

/* Display the error message */
// console.error(new Error('Hell! This is a wrong method.'));  
console.error("\n",new Error('Whooooo.. Exception Occured '));
console.error("\n",new Error(`Whooooo.. Exception Occured Mr.${name}`));

/* Display the Warn message */
console.warn("\n","Don't mess with! Don't mess with me!");
console.warn("\n",`Don't mess with me ${name}! Don't mess with me!`);


// https://www.javatpoint.com/nodejs-tutorial