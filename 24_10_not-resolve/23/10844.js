function readText(addr) {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const iData = readText("10844.txt");
const DIV_NUM = 1000000000;
/**
 * N이 주어질 때, 길이가 N인 계단 수
 */
const N = Number(iData);

const dp = Array.from(Array(N + 1), () => Array(10).fill(0));
dp[1].forEach((v, i, arr) => {
  if (i > 0) arr[i] = 1;
});
for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][1] % DIV_NUM;
  for (let j = 1; j < 9; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % DIV_NUM;
  }
  dp[i][9] = dp[i - 1][8] % DIV_NUM;
}
console.log(dp[N].reduce((a, b) => a + b) % DIV_NUM);
