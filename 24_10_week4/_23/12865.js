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
// weight가 같으면 value가 높은 것부터
products.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  return b[1] - a[1];
});

const dp = Array.from(Array(N), () => Array(2).fill(0));
let max = 0;
for (let i = 0; i < N; i++) {
  dp[i] = [...products[i]];
  // console.log(`dp[${i}]: ${dp[i]}`);
  for (let j = i + 1; j < N; j++) {
    // console.log(`j: products [${products[j].join("|")}]`);
    if (dp[i][0] + products[j][0] > K) continue;
    else {
      dp[i][0] = Math.max(dp[i][0], dp[i][0] + products[j][0]);
      dp[i][1] = Math.max(dp[i][1], dp[i][1] + products[j][1]);
    }
  }
  if (dp[i][0] == K) max = Math.max(max, dp[i][1]);
}
console.log(max);

console.log("---- test ----");
console.log(`${N} ${K}`);
for (let pd of products) {
  console.log(`${pd}`);
}
for (let i in dp) {
  console.log(`${dp[i].join("|")}`);
}
