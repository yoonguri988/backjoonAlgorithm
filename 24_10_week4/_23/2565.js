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

let maxLen = 0;
N = Number(N);
electLines.forEach((v, i, arr) => {
  arr[i] = v.split(" ").map(Number);
  if (maxLen < Math.max(...arr[i])) maxLen = Math.max(...arr[i]);
});

const start = Array(N);
const end = Array(N);
for (let i = 0; i < N; i++) {
  [start[i], end[i]] = electLines[i];
}
// console.log(`start = ${start.join("|")}`);
// console.log(`end = ${end.join("|")}`);
const dp = Array(N).fill(0);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < N; j++) {
    if (start[i] < start[j] && end[i] > end[j]) {
      max = Math.max(max, dp[j] + 1);
    }
  }
  dp[i] = max;
}
console.log(`${dp.join("|")}`);

// for (let i = N - 1; i >= 0; i--) {
//   let max = 0;
//   for (let j = i + 1; j < N; j++) {
//     if (start[i] < start[j] && end[i] < end[j]) {
//       max = Math.max(max, dp[j] + 1);
//     }
//   }
//   dp[i] = max;
// }
