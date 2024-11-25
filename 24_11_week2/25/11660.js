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

const iData = readText("11660.txt");
/**
 * 구간 합 구하기 5
 * N×N개의 수가 N×N 크기의 표.
 * (x1, y1)부터 (x2, y2)까지 합.
 */
const I_ARR = iData.split("\r\n");
const [N, Q] = I_ARR.shift().split(" ").map(Number);
const N_NRR = I_ARR.slice(0, N).map((v) => v.split(" ").map(Number));
const POINTS = I_ARR.slice(N).map((v) => v.split(" ").map((v) => v - 1));

const dp = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
  dp[i][0] = N_NRR[i][0];
  for (let j = 1; j < N; j++) {
    dp[i][j] = dp[i][j - 1] + N_NRR[i][j];
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N; j++) {
    dp[i][j] += dp[i - 1][j];
  }
}

let ans = "";
for (let [x1, y1, x2, y2] of POINTS) {
  if (x1 === 0 && y1 === 0) ans += `${dp[x2][y2]}\n`;
  else if (y1 === 0) ans += `${dp[x2][y2] - dp[x1 - 1][y2]}\n`;
  else if (x1 === 0) ans += `${dp[x2][y2] - dp[x2][y1 - 1]}\n`;
  else {
    ans += `${
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
    }\n`;
  }
}
console.log(ans);
