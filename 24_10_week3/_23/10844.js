/** 10844 쉬운 계단 수 */
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

const ip = readInput("10844.txt");

const N = Number(ip);
const MOD = 1000000000;
const dp = Array.from(Array(N + 1), () => Array(10).fill(0));
dp[1].forEach((v, i, arr) => {
  if (i > 0) arr[i] = 1;
});

for (let i = 2; i < dp.length; i++) {
  dp[i][0] = dp[i - 1][1] % MOD;
  for (let j = 1; j < 9; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    dp[i][j] %= MOD;
  }
  dp[i][9] = dp[i - 1][8] % MOD;
  // console.log(`dp[${i}]: ${dp[i].join("|")}`);
}

let sum = 0;
for (let i = 0; i < dp[N].length; i++) {
  sum += dp[N][i];
}
console.log(sum % MOD);
