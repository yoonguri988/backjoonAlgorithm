/** 1932 정수 삼각형 */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week3/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("1932.txt");
let op = "";

let [N, ...TriArr] = ip.split("\r\n");
N = Number(N);
let dp = TriArr.map((v) => {
  return v.split(" ").map(Number);
});

for (let i = 1; i < N; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) dp[i][j] += dp[i - 1][j];
    else if (j == dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1];
    else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}
op = Math.max(...dp[N - 1]);
console.log(op);
