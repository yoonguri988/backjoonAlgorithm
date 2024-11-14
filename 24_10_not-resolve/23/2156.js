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

const iData = readText("2156.txt");
const [N, ...WINES] = iData.split("\r\n").map(Number);
const dp = Array(N).fill(0);
dp[0] = WINES[0];
if (N > 1) dp[1] = Math.max(WINES[0] + WINES[1], WINES[1]);
if (N > 2) {
  dp[2] = Math.max(WINES[0] + WINES[2], WINES[1] + WINES[2]);
  dp[2] = Math.max(dp[1], dp[2]);
}
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 3] + WINES[i - 1] + WINES[i], dp[i - 2] + WINES[i]);
  dp[i] = Math.max(dp[i], dp[i - 1]);
}
console.log(Math.max(...dp));
