const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week1/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readText("2629");
const ipArr = ip.split("\r\n");
const N = Number(ipArr.shift());
const weights = ipArr.shift().split(" ").map(Number);
const M = Number(ipArr.shift());
const beads = ipArr.shift().split(" ").map(Number);

const MAX_VALUE = 40001;
const dp = Array(MAX_VALUE).fill(false);
let res = "";
dp[0] = true;

for (const v of weights) {
  let tmp = [];
  for (let i = 0; i <= MAX_VALUE; i++) {
    if (dp[i]) tmp.push(i + v, Math.abs(i - v));
  }
  tmp.forEach((v) => (dp[v] = true));
}

for (const v of beads) {
  res += dp[v] ? `Y\n` : `N\n`;
}
console.log(res);
// console.log(N, weights);
// console.log(M, beads);
