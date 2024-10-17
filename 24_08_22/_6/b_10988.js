function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_6/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10988.txt");
let op = 0;

const word = ip.trim();
const len = word.length;
let pre = word.slice(0, len / 2);
let sub = word.slice(len % 2 == 0 ? len / 2 : len / 2 + 1, len);
sub = [...sub].reverse().join("");
if (sub == pre) op = 1;
console.log(op);
