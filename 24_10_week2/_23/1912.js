const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week2/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("1912.txt");
let op = "";

let [N, Nrr] = ip.split("\n");
Nrr = Nrr.split(" ").map(Number);
// 인덱스마다 최대합을 구하고
// 마지막에 가장 큰 인덱스 값을 뽑아 내는 것이다.
//각 인덱스마다 최대합을 구하여 저장 해놓고
// 다음 인덱스에서 최대합을 구할 때 활용

// tabulation 반복문
// 아래서 부터 합치면서 올라오기
let dp = Array(N).fill(0);
dp[0] = Nrr[0];
for (let i = 1; i < N; i++) {
  if (dp[i - 1] < 0) {
    dp[i] = Nrr[i];
    continue;
  }
  dp[i] = dp[i - 1] + Nrr[i];
}
console.log(Math.max(...dp));
