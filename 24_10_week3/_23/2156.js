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
const dp = Array(N + 1).fill(0);
dp[1] = wines[0];
dp[2] = wines[0] + wines[1];
for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    wines[i - 1] + wines[i - 2] + dp[i - 3],
    wines[i - 1] + dp[i - 2],
    dp[i - 1]
  );
}
console.log(dp[N]);
