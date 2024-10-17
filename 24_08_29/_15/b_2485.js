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

const ip = readInput("2485.txt");
let op = 0;
/**
 * "가로수들이 모두 같은 간격"
 * "가능한 적은 수"의 나무 심기
 */
let [N, ...trees] = ip.split("\n").map(Number);
let betw = Array(trees.length - 1);
for (let i = 1; i < trees.length; i++) {
  betw[i - 1] = trees[i] - trees[i - 1];
}
let gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};
let ans = betw[0];
for (let i = 1; i < betw.length; i++) {
  ans = gcd(ans, betw[i]);
}

let fin = trees[0];
for (let i = 1; i < trees.length; i++) {
  fin += ans;
  while (fin != trees[i]) {
    fin += ans;
    op++;
  }
}
console.log(op);
