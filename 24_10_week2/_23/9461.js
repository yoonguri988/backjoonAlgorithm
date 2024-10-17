const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week2/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("9461.txt");
let op = "";

const [T, ...Nums] = ip.split("\n").map(Number);
const dp = Array(Math.max(...Nums));
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 0; i < T; i++) {
  for (let j = 3; j < Nums[i]; j++) {
    if (dp[Nums[i] - 1]) break;
    dp[j] = dp[j - 3] + dp[j - 2];
  }
  op += `${dp[Nums[i] - 1]}\n`;
}

console.log(op);
