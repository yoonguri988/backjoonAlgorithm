const readText = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = `./24_11_week3/25/ip/${addr}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e);
  }
};

const iData = readText("13305");
/**
 * 13305 주유소
 * N: 도시의 수
 * ROAD_LEN:인접한 도시를 연결하는 도로의 길이(N-1개)
 * GAS_PRICE: 주유소의 리터당 가격 (N개)
 */
const [[N], ROAD_LEN, GAS_PRICE] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

const dp = [...GAS_PRICE];
let price = dp[0];
for (let i = 1; i < N; i++) {
  price = Math.min(price, dp[i]);
  dp[i] = price;
}

let min = BigInt(0);
for (let i = 0; i < N - 1; i++) {
  min += BigInt(ROAD_LEN[i]) * BigInt(dp[i]);
}

// console.log(`${N}`);
// console.log(`${ROAD_LEN}`);
// console.log(`${GAS_PRICE}`);
console.log(`${min}`);
