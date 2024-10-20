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

const dp = Array(N).fill(0);
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] < arr[j]) {
      console.log(`(j) = ${j}, (arr[j]) = ${arr[j]}`);
      dp[j]++;
    }
  }
  console.log(`(${i}) = ${dp[i]}`);
  console.log(dp);
}
