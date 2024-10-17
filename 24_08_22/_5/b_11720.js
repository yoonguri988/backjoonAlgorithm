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

const ip = readInput("11720.txt");
let op = 0;
const [N, nums] = ip.trim().split("\n");
for (let n of nums.split("")) {
  op += n * 1;
}
console.log(op);
