# Node.js OS Module Example

This repository contains a Node.js script that demonstrates the use of the OS module, which provides a number of operating system-related utility methods and properties. The purpose of this script is to give you a comprehensive overview of the OS module's capabilities and how to use them.

## Overview

The OS module in Node.js provides utilities to interact with the operating system. It can be used to fetch information about the current user, system uptime, memory usage, and more. This script includes examples of all methods and properties available in the OS module, with comments explaining each one.

## Usage

1. **Clone the repository**:
    ```sh
    git clone https://github.com/kodfader/USAGE-of-OS-MODULE-in-NodeJS.git
    cd usage-of-os-module-in-nodejs
    ```

2. **Install Node.js**:
    Ensure that you have Node.js installed on your machine. You can download and install it from [Node.js official website](https://nodejs.org/).

3. **Run the script**:
    ```sh
    node os_example.js
    ```

## Methods and Properties

The script demonstrates the following methods and properties from the OS module:

- `os.arch()`: Returns the operating system CPU architecture.
- `os.constants`: Returns an object containing commonly used operating system-specific constants.
- `os.cpus()`: Returns an array of objects containing information about each CPU/core installed.
- `os.devNull`: Returns the file path to the null device.
- `os.endianness()`: Returns the endianness of the CPU ('BE' for big-endian or 'LE' for little-endian).
- `os.freemem()`: Returns the amount of free system memory in bytes.
- `os.getPriority([pid])`: Returns the scheduling priority of the specified process.
- `os.homedir()`: Returns the home directory of the current user.
- `os.hostname()`: Returns the hostname of the operating system.
- `os.loadavg()`: Returns an array containing the 1, 5, and 15 minute load averages.
- `os.networkInterfaces()`: Returns an object containing network interfaces that have been assigned a network address.
- `os.platform()`: Returns a string identifying the operating system platform.
- `os.release()`: Returns the operating system release.
- `os.setPriority([pid, ]priority)`: Sets the scheduling priority of the specified process.
- `os.tmpdir()`: Returns the operating system's default directory for temporary files.
- `os.totalmem()`: Returns the total amount of system memory in bytes.
- `os.type()`: Returns the operating system name.
- `os.uptime()`: Returns the system uptime in seconds.
- `os.userInfo([options])`: Returns information about the current user.
- `os.version()`: Returns the operating system version.
- `os.EOL`: A constant defining the operating system-specific end-of-line marker.
- `os.machine()`: Returns the machine type as a string.

## Example Output

Running the script will output information about your system, such as:

```sh
CPU Architecture: x64
OS Constants: { signals: { ... }, errno: { ... }, priority: { ... } }
CPU Info: [ { model: 'Intel(R) Core(TM) i7-8565U CPU @ 1.80GHz', ... } ]
Dev Null: /dev/null
Endianness: LE
Free Memory: 17179869184
Process Priority (current process): 0
Home Directory: /home/username
Hostname: my-computer
Load Average: [ 0.1, 0.5, 0.15 ]
Network Interfaces: { lo: [ ... ], eth0: [ ... ] }
Platform: linux
OS Release: 5.8.0-43-generic
Temporary Directory: /tmp
Total Memory: 34359738368
OS Type: Linux
System Uptime: 12345
User Info: { uid: 1000, gid: 1000, username: 'username', homedir: '/home/username', shell: '/bin/bash' }
OS Version: #1 SMP Fri Feb 5 18:02:57 UTC 2021
End of Line Marker: "\n"
Machine: x86_64
