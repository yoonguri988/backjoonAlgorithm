const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_11_week3/25/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("11047");
/**
 * 필요한 동전의 갯수 (최소)
 * : 동전의 가치 COINS가 오름차순
 */
const [[N, K], ...COINS] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

let len = COINS.length - 1;
let money = K;
let cnt = 0;
for (let i = len; i >= 0; i--) {
  let coin = COINS[i];
  if (coin > money) continue;
  cnt += Math.floor(money / coin);
  money %= coin;
}

// console.log(`---test`);
// console.log(`${N} ${K}`);
// console.log(`${COINS}`);
console.log(`${cnt}`);
