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

const iData = readText("10986.txt");
const [[N, M], ARR] = iData.split("\r\n").map((v) => v.split(" ").map(Number));
/**
 * 연속된 부분 구간의 합이 M으로 나누어 떨어지는 구간의 개수
 * 1차 시간 초과
 */

const dp = Array(M).fill(0);
let ans = 0;

for (let i = 1; i < N; i++) {
  ARR[i] += ARR[i - 1];
}

for (let i = 0; i < N; i++) {
  let rem = ARR[i] % M;
  if (rem === 0) ans++;
  dp[rem]++;
}
for (let i = 0; i < M; i++) {
  if (dp[i] > 1) ans = ans + (dp[i] * (dp[i] - 1)) / 2;
}

// console.log(`----test`);
// console.log(`${N} ${M}`);
// console.log(`${ARR}`);
// console.log(`${dp}`);
console.log(`${ans}`);
