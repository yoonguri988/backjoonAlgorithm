function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_6/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1157.txt");
let op = "";

const word = ip.trim().toLowerCase();
let dict = {};
for (let w of word) {
  if (!dict[w]) dict[w] = 0;
  dict[w]++;
}

let maxAlpha = Object.values(dict).sort((a, b) => b - a)[0];
let AlphaEnt = Object.entries(dict).sort((x, y) => y[1] - x[1]);

for (let ae of AlphaEnt) {
  if (ae[1] == maxAlpha) op += ae[0].toUpperCase();
  if (op.length > 1) {
    op = "?";
    break;
  }
}
console.log(op);
