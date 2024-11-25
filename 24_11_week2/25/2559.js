const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = "./24_11_week2/25/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const iData = readText("2559.txt");
/**
 * 주어진 수열에서 연속적인 며칠 동안의 온도의 합이 가장 큰 값
 * N 측정한 전체 날짜수 K 연속적 날짜
 * DAYS 측정한 날짜 수열
 */
const [[N, K], DAYS] = iData.split("\r\n").map((v) => v.split(" ").map(Number));

const dp = Array(K).fill(0);
dp[0] = DAYS[0];
for (let i = 1; i < N; i++) {
  dp[i] = dp[i - 1] + DAYS[i];
}
let max = dp[K - 1];
for (let i = K; i < N; i++) {
  max = Math.max(max, dp[i] - dp[i - K]);
}
console.log(max);
