function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_2588.txt");
const nArr = ip.trim().split("\n");
const n0 = nArr[0];
const n1 = nArr[1];
// console.log("%d | %d", n0, n1);

const o = n1 % 10;
const t = Math.floor((n1 % 100) / 10);
const h = Math.floor(n1 / 100);
// console.log("%d, %d, %d", o, t, h);

console.log(n0 * o);
console.log(n0 * t);
console.log(n0 * h);
console.log(n0 * n1);
