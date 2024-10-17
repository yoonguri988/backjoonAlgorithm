function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_1008.txt");
let op = 0.0;

const ipArr = ip.split(" ");
op = ipArr[0] / ipArr[1];
console.log(op);
