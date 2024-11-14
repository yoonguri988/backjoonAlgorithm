function readText(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (err) {
    console.error(err);
  }
}
// 전깃줄
const iData = readText("2565.txt");
const [[N], ...ELECT_ARR] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));
ELECT_ARR.sort((a, b) => a[0] - b[0]);

const dp = Array(N).fill(0);
dp[0] = 1;
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (ELECT_ARR[i][1] > ELECT_ARR[j][1]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i] += 1;
}
console.log(N - Math.max(...dp));
