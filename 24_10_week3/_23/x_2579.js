/** 2579 계단 오르기 */
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

const ip = readInput("2579.txt");
let op = "";

const [N, ...stairs] = ip.split("\r\n").map(Number);
let dp = Array(N).fill(0);
dp[0] = stairs[0];
dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    stairs[i] + stairs[i - 1] + dp[i - 3],
    stairs[i] + dp[i - 2]
  );
}
console.log(dp[N - 1]);
