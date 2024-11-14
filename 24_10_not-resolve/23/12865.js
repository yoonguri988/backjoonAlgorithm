function readTextFile(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (err) {
    console.error(err);
  }
}

let iData = readTextFile("12865.txt");
/**
 * N 물품의 갯수 K 버틸 수 있는 무게
 * ...NRR
 * W 물건의 무게 V 물건의 가치
 * 배낭에 넣을 수 있는 물건들의 가치의 최댓값
 */
const [[N, K], ...PRODUCTS] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
for (let i = 1; i <= N; i++) {
  let [W, V] = PRODUCTS[i - 1];
  for (let j = 0; j <= K; j++) {
    if (j < W) dp[i][j] = dp[i - 1][j];
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
  }
}
console.log(`${dp[N][K]}`);

console.log(`-------`);
console.log(`${N} ${K}`);
console.log(`${PRODUCTS}`);
