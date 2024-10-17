function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_8/ip/" + addr;

  try {
    const data = fs.readFileSync(addr).toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2720.txt");
let op = "";

const [T, ...tcs] = ip
  .trim()
  .split("\n")
  .map((n) => n * 1);
const qdnp = [250, 100, 50, 10];

for (let tc of tcs) {
  tc *= 10;
  for (let chg of qdnp) {
    let tmp = Math.floor(tc / chg);
    op += tmp + " ";
    tc -= Math.round(chg * tmp * 100) / 100;
  }
  op += "\n";
}
console.log(op);
