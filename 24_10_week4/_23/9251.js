/** 9251 LCS */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week4/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("9251.txt");
const [strA, strB] = ip.split("\r\n");

const [M, N] = [strA.length, strB.length];
const dp = Array.from(Array(M + 1), () => Array(N + 1).fill(0));

for (let i = 0; i <= M; i++) {
  for (let j = 0; j <= N; j++) {
    if (i == 0 || j == 0) {
      dp[i][j] = 0;
    } else if (strA[i - 1] == strB[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(`${dp[M][N]}`);
