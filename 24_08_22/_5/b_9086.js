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

const ip = readInput("9086.txt");
let op = "";

const [T, ...tcs] = ip.trim().split("\r\n");
for (let tc of tcs) {
  op += tc.charAt(0) + tc.charAt(tc.length - 1) + "\n";
}
console.log(op);
