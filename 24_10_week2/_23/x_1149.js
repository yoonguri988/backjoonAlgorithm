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

const ip = readInput("1149.txt");
let op = "";
/**
 * 집 N개. 거리는 선분으로 나타냄.
 * 1 ~ N번의 집이 순서대로!
 * 집은 R, G, B 중 하나의 색으로 칠함
 * 규칙을 만족하면서 모든 집을 칠하는 최소비용
 *
 * 1번과 2번의 집 색은 같지 않다
 * N번의 집색은 N-1번의 집색과 같지 않아야 한다
 * i(2 <= i <= N-1)번 집 색은
 * i-1번 i+1번 집의 색과 같지 않아야 한다.
 */
let [N, ...rgbCosts] = ip.split("\n").map((v) => {
  return v.split(" ").map(Number);
});
N = N[0];
const dp = Array.from(Array(N), () => Array(3).fill(0));
dp[1] = rgbCosts[0];
for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgbCosts[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgbCosts[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgbCosts[i][2];
}
op = Math.min(...dp[N - 1]);
console.log(`${op}`);
