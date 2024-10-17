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

const ip = readInput("2675.txt");
let op = "";

const [T, ...tcs] = ip.trim().split("\n");
for (let tc of tcs) {
  let [R, S] = tc.split(" ");
  for (let i of S) {
    for (let r = 0; r < R; r++) op += i;
  }
  op += "\n";
}

console.log(op);
