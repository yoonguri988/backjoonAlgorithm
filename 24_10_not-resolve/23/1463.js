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

const iData = readText("1463.txt");
/**
 * 1) X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * 2) X가 2로 나누어 떨어지면, 2로 나눈다.
 * 3) 1을 뺀다.
 *
 * 이를 적절히 사용하여 1을 만드는 데 연산을 사용하는 최솟값
 */
const N = Number(iData);
const dp = Array(N + 1).fill(0);
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
console.log(dp[N]);
