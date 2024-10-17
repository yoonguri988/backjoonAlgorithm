function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_7/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10798.txt");
let op = "";

const nArr = ip.trim().split("\n");
let maxLen = 15;
for (let i = 0; i <= maxLen; i++) {
  for (let n of nArr) {
    op += n.charAt(i).trim();
  }
}
console.log(op);
