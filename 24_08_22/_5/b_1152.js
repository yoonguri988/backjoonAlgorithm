function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_5/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1152.txt");
let op = 0;

let str = ip.trim().split(" ");
str = str.filter((v, i, arr) => v != "");
op = str.length;
console.log(op);
