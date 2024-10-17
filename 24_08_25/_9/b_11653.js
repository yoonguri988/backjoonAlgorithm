function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_9/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("11653.txt");
let op = "";

let N = ip * 1;

let ai = 2;
while (N > 1) {
  if (N % ai != 0) {
    ai++;
  } else {
    N /= ai;
    op += `${ai}\n`;
  }
}
console.log(op);
