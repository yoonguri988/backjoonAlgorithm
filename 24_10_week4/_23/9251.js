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

const N = Math.max(strA.length, strB.length);
const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let max = 0;
  // console.log(`strA: ${strA[i]}`);
  for (let j = 0; j < N; j++) {
    if (strA[i] == strB[j]) {
      // console.log(`▼ strB: ${strB[j]} max: ${max}`);
      max = Math.max(max, dp[j] + 1);
      // console.log(`▼ dp: ${dp[j]} max: ${max}`);
    }
    dp[i] = max;
  }
  // console.log(`== dp(${i}): ${dp[i]}`);
}
// console.log(`${dp.join("|")}`);
console.log(`${Math.max(...dp)}`);
