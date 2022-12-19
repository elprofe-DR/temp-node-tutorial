const {readFile, writeFile} = require("fs");
console.log("Start!");
readFile("../contentfolder/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = res;
    readFile("../contentfolder/subfolder/second.txt", "utf-8", (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = res;
        writeFile("../contentfolder/result-async.txt", `Here is the result of the async operation: ${first}, ${second}`, {flag: 'a'}, (err, res) => {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log("Done with this task!");
          }
        });
      }
    });
  }
});
console.log("Starting new task!");
