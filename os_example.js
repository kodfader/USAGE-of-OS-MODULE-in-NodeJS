// Import the OS module
const os = require('os');


// Code Start //

// os.arch()
// Returns the operating system CPU architecture.
console.log('CPU Architecture:', os.arch());

// os.constants
// Returns an object containing commonly used operating system-specific constants.
console.log('OS Constants:', os.constants);

// os.cpus()
// Returns an array of objects containing information about each CPU/core installed.
console.log('CPU Info:', os.cpus());

// os.devNull
// Returns the file path to the null device.
console.log('Dev Null:', os.devNull);

// os.endianness()
// Returns the endianness of the CPU ('BE' for big-endian or 'LE' for little-endian).
console.log('Endianness:', os.endianness());

// os.freemem()
// Returns the amount of free system memory in bytes.
console.log('Free Memory:', os.freemem());

// os.getPriority([pid])
// Returns the scheduling priority of the specified process.
console.log('Process Priority (current process):', os.getPriority());

// os.homedir()
// Returns the home directory of the current user.
console.log('Home Directory:', os.homedir());

// os.hostname()
// Returns the hostname of the operating system.
console.log('Hostname:', os.hostname());

// os.loadavg()
// Returns an array containing the 1, 5, and 15 minute load averages.
console.log('Load Average:', os.loadavg());

// os.networkInterfaces()
// Returns an object containing network interfaces that have been assigned a network address.
console.log('Network Interfaces:', os.networkInterfaces());

// os.platform()
// Returns a string identifying the operating system platform.
console.log('Platform:', os.platform());

// os.release()
// Returns the operating system release.
console.log('OS Release:', os.release());

// os.setPriority([pid, ]priority)
// Sets the scheduling priority of the specified process.
try {
    os.setPriority(0, 10); // Example: setting priority for the current process
    console.log('Priority set successfully');
} catch (err) {
    console.log('Error setting priority:', err);
}

// os.tmpdir()
// Returns the operating system's default directory for temporary files.
console.log('Temporary Directory:', os.tmpdir());

// os.totalmem()
// Returns the total amount of system memory in bytes.
console.log('Total Memory:', os.totalmem());

// os.type()
// Returns the operating system name.
console.log('OS Type:', os.type());

// os.uptime()
// Returns the system uptime in seconds.
console.log('System Uptime:', os.uptime());

// os.userInfo([options])
// Returns information about the current user.
console.log('User Info:', os.userInfo());

// os.version()
// Returns the operating system version.
console.log('OS Version:', os.version());

// os.EOL
// A constant defining the operating system-specific end-of-line marker.
console.log('End of Line Marker:', JSON.stringify(os.EOL));

// os.machine()
// Returns the machine type as a string.
console.log('Machine:', os.machine());

// os.networkInterfaces()
// Returns an object containing network interfaces that have been assigned a network address.
console.log('Network Interfaces:', os.networkInterfaces());

// os.tmpdir()
// Returns the operating system's default directory for temporary files.
console.log('Temporary Directory:', os.tmpdir());

// os.userInfo([options])
// Returns information about the current user.
console.log('User Info:', os.userInfo());


// Code End //