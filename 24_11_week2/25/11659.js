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

const iData = readText("11659.txt");
/**
 * 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합
 * [0] N(수의 갯수), M(합을 구해야하는 횟수)
 * [1] NARR(N개의 수)
 * [2] MARR(합을 구해야하는 구간)
 */
const [[N, M], N_ARR, ...M_ARR] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

const dp = Array(N).fill(0);
dp[0] = N_ARR[0];
for (let i = 1; i < N; i++) {
  dp[i] = dp[i - 1] + N_ARR[i];
}
let oData = "";
for (let [i, j] of M_ARR) {
  let ans = dp[j - 1];
  if (i - 2 >= 0) ans -= dp[i - 2];
  oData += `${ans}\n`;
}

console.log(`---test---`);
console.log(`${oData}`);
