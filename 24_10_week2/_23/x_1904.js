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

const ip = readInput("1904.txt");
let op = "";

const N = Number(ip);
let dp = Array(N).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[N]);
