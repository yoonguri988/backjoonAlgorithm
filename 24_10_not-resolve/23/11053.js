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
// 가장 긴 증가하는 부분 수열
const iData = readText("11053.txt");
const [[N], N_ARR] = iData.split("\r\n").map((v) => v.split(" ").map(Number));

const dp = Array(N).fill(0);
dp[0] = 1;
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (N_ARR[i] > N_ARR[j]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i] += 1;
}
console.log(dp);
console.log(Math.max(...dp));
