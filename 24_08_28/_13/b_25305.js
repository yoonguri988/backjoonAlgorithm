function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_28/_13/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("25305.txt");
let op = "";

const [Nk, scores] = ip.split("\n");
const [N, k] = Nk.split(" ").map((n) => +n);
const score = scores.split(" ").map((n) => +n);
score.sort((a, b) => b - a);
const reward = score.slice(0, k);
console.log(reward[reward.length - 1]);
