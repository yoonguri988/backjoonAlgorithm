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

const ip = readText("7579");
const [[N, M], memories, costs] = ip
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

const sum = costs.reduce((a, b) => a + b);
const dp = Array(sum + 1).fill(0);
for (let i = 0; i < N; i++) {
  let memo = memories[i];
  let cost = costs[i];

  for (let j = sum; j >= cost; j--) {
    dp[j] = Math.max(dp[j], dp[j - cost] + memo);
  }
}
// console.log(dp);
console.log(dp.findIndex((it) => it >= M));
// for (let i = 0; i < N; i++) {
//   let sum = memories[i];
//   let cnt = caches[i];
//   for (let j = i + 1; j < N; j++) {
//     sum += memories[j];
//     cnt += caches[j];
//     if (sum >= M) {
//       // console.log(`[${i},${j}] = ${memories[i]} ${memories[j]} ${sum}`);
//       if (!dp[j - i]) dp[j - i] = cnt;
//       else dp[j - i] = Math.min(dp[j - i], cnt);
//     }
//   }
// }
// console.log(Math.min(...dp));
// console.log(N, M);
// console.log(memories);
// console.log(caches);
