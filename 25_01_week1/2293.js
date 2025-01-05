const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week1/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readText("2293");
const ipArr = ip.split("\r\n");
const [N, K] = ipArr.shift().split(" ").map(Number);
const COINS = ipArr.map(Number);

const dp = Array(K + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = COINS[i]; j <= K; j++) {
    dp[j] = dp[j] + dp[j - COINS[i]];
  }
}
console.log(dp[K]);

// console.log(N, K);
// console.log(COINS);
// console.log(dp);
