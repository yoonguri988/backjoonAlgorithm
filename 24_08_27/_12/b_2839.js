function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2839.txt");
let op = -1;

/**
 * 최소 봉다리
 */
const [a3, b5] = [3, 5];
let sum = 0;
let min = 9999;
for (let i = 0; i <= ip / b5; i++) {
  for (let j = 0; j <= ip / a3; j++) {
    if (i * b5 + j * a3 == ip) {
      sum = i * b5 + j * a3;
      if (min > i + j) min = i + j;
    }
  }
  sum = 0;
}
console.log(min == 9999 ? -1 : min);
