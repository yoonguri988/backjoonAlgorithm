function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_10/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("14215.txt");
let op = "";

const [a, b, c] = ip
  .trim()
  .split(" ")
  .map((n) => n * 1)
  .sort((a, b) => a - b);
let cTmp = a;
while (cTmp < a + b && cTmp <= c) {
  cTmp++;
}
op = a + b + (cTmp - 1);
console.log(op);
