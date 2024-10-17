function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_7/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2563.txt");
let op = 0;

/**
 * whitePaper = 100 * 100;
 * @params blackPaper = ip [x(< 100) * y(< 100)]
 * @returns blackArea = op(< 1000)
 */

let whitePaper = Array.from(Array(100), () => Array(100).fill(0));
const [N, ...blackPapers] = ip.trim().split("\n");
for (let bp of blackPapers) {
  const [x, y] = bp
    .trim()
    .split(" ")
    .map((n) => n * 1);
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (whitePaper[i][j] == 0) op++;
      whitePaper[i][j] = 1;
    }
  }
}
console.log(op);
