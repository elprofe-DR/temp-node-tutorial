const os = require("os");
//current user info
const user = os.userInfo();
console.log(user);
// returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds.`);
//operating system info
const op = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
};
console.log(op);
