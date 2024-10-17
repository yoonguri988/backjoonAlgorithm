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

const ip = readInput("1546.txt");
let op;

const [N, scores] = ip.trim().split("\n");
const sArr = scores.split(" ").sort((a, b) => b * 1 - a * 1);
const maxScore = parseInt(sArr[0]);

let tot = 0;
for (let s of sArr) {
  tot += (s / maxScore) * 100;
}
tot /= N;
op = tot;
console.log(op);
