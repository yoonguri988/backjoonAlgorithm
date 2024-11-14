function readTextFile(addr) {
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

let iData = readTextFile("9251.txt");
/**
 * 모두의 부분 수열이 되는 수열 중 가장 긴 것
 */
const [S_ARR, S_BRR] = iData.split("\r\n").map((v) => v.split(""));

const [A, B] = [S_ARR.length, S_BRR.length];
const dp = Array.from(Array(A + 1), () => Array(B + 1).fill(0));
for (let i = 0; i <= A; i++) {
  for (let j = 0; j <= B; j++) {
    if (i === 0 || j === 0) dp[i][j] = 0;
    else if (S_ARR[i - 1] === S_BRR[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}
console.log(`${dp[A][B]}`);
