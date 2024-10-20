/** 11053 가장 긴 증가하는 부분 수열 */
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

const ip = readInput("11053.txt");

let [N, arr] = ip.split("\n");
N = Number(N);
arr = arr.split(" ").map(Number);

const dp = Array(N);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[j] < arr[i]) max = Math.max(max, dp[j]);
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));
