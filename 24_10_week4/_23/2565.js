/** 2565 전깃줄 */
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

const ip = readInput("2565.txt");
let [N, ...electLines] = ip.split("\r\n");
N = Number(N);
electLines = electLines.map((v) => v.split(" ").map(Number));

const dp = Array(N).fill(1);

electLines.sort((a, b) => a[0] - b[0]);

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (electLines[i][1] > electLines[j][1]) {
      max = Math.max(max, dp[j]);
    }
  }
  dp[i] = max + 1;
}
console.log(`${N - Math.max(...dp)}`);
