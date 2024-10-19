/** 2156 포도주 시식 */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week3/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("2156.txt");
const [N, ...wines] = ip.split("\n").map(Number);
const dp = Array(N).fill(0);
dp[0] = wines[0];
dp[1] = Math.max(wines[0] + wines[1], wines[1]);
dp[2] = Math.max(wines[0] + wines[2], wines[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(wines[i] + wines[i - 1] + dp[i - 3], wines[i] + dp[i - 2]);
}
console.log(Math.max(...dp));
