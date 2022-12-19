// const {readFileSync} = require("fs");
const fs = require("fs");
console.log("start");
const first = fs.readFileSync("../contentFolder/first.txt", "utf-8");
const second = fs.readFileSync("../contentFolder/subfolder/second.txt", "utf-8");

console.log(first, second);
//this is to write to the file in question. note that is the file is not in the specified path node will create a new file right there where it was not able to find the file you told it to look for. so you have to be specific if you want to over write a file.
fs.writeFileSync("../contentFolder/result.txt", `Here is the result : ${first}, ${second}`, {flag: 'a'});
//but if you add the {flag: 'a'} to the writeFileSync you will append something to it instead of overwriting it.
console.log("Done with this task!");
console.log("Starting the next one!");
