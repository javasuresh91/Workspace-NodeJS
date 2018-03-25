const os = require('os'); 

/**
This method is used to fetch the operating system CPU architecture.
*/
console.log("Dispaly OS CPU architecture : "+os.arch());

/**
This method is used to fetch an array of objects containing information about each cpu/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the cpu/core spent in: user, nice, sys, idle, and irq).
*/
console.log("CPU Core Information  : \n",os.cpus());

/**
This method returns the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.
*/
console.log("Bytes Ordering : ",os.endianness());

/**
This methods returns the amount of free system memory in bytes.
*/
console.log("Free Space in the System : ",os.freemem());

/**
This method returns the home directory of the current user.
*/
console.log("Home Diectory of the User: ",os.homedir());

/**
This method is used to returns the hostname of the operating system.
*/
console.log("Hostname : ",os.hostname());

/**
This method returns an array containing the 1, 5, and 15 minute load averages. The load average is a time fraction taken by system activity, calculated by the operating system and expressed as a fractional number.
*/
console.log("Loading Timing in Avg : ",os.loadavg());

/**
This method returns a list of network interfaces.
*/
console.log("Network interfaces : \n",os.networkInterfaces());
/**
This method returns the operating system platform of the running computer i.e.'darwin', 'win32','freebsd', 'linux', 'sunos' etc.
*/
console.log("Operating System : ",os.platform());

/**
This method returns the operating system release.
*/
console.log("OS release : ",os.release());

/**
This method returns the operating system's default directory for temporary files.
*/
console.log("Dir For Temp Files in the System : ",os.tmpdir());

/**
This method returns the total amount of system memory in bytes.
*/
console.log("Total System Memory : ",os.totalmem());

/**
This method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.
*/
console.log("OS Name : ",os.type());

/**
This method returns the system uptime in seconds.
*/
console.log(" System Running Time: ",os.uptime());

/**
This method returns a subset of the password file entry for the current effective user.
*/
// console.log("user info : ",os.userinfo());
