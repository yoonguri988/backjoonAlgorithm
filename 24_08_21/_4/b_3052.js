function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_4/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("3052.txt");
let op = 1;

const nums = ip
  .trim()
  .split("\n")
  .map((n) => n * 1);

let nmg = {};
for (let n of nums) {
  nmg[n % 42] = 1;
}
if (Object.keys(nmg).length) op = Object.keys(nmg).length;
console.log(op);
