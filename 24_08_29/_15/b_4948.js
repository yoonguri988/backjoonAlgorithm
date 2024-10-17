let readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("4948.txt");
let op = "";
/**
 * 임의의 자연수 N
 * : N보다 크고, 2N보다 작거나 같은 소수
 * "적어도 하나는 존재"
 */
let prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

const tcs = ip.split("\n").map(Number);
for (let tc of tcs) {
  if (tc == 0) break;
  let cnt = 0;
  for (let i = tc + 1; i <= tc * 2; i++) {
    if (prime(i)) cnt++;
  }
  op += cnt + "\n";
}
console.log(op);
