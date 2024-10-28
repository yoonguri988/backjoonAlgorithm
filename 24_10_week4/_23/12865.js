/** 12865 평범한 배낭 */
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

const ip = readInput("12865.txt");
const arr = ip.split("\r\n");
const [N, K] = arr.shift().split(" ").map(Number);
const products = [];
//products[i][0] = weight products[i][0] = value
for (let i = 0; i < arr.length; i++) {
  products.push(arr[i].split(" ").map(Number));
}

products.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  return b[1] - a[1];
});
products.unshift(undefined);

const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
for (let i = 1; i <= N; i++) {
  const [w, v] = products[i];
  for (let j = 0; j <= K; j++) {
    if (j < w) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }
}
console.log(dp[N][K]);
