const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week3/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("1654");
/**
 * 1654 랜선 자르기
 * K개의 랜선을 적당한 길이로 잘라 N개의 랜선을 만들자
 * 단, 모든 랜선의 길이는 같음
 * * 1 <= K <= 10,000
 * * 1 <= N <= 1,000,000
 * * K <= N
 */
const input = iData.split("\r\n");
const [K, N] = input.shift().split(" ").map(Number);
const K_ARR = [...input].map(Number).sort((a, b) => a - b);

let [start, end] = [0, K_ARR[K - 1]];
while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const num = K_ARR.reduce((a, b) => a + Math.floor(b / mid), 0);
  if (num >= N) start = mid + 1;
  else end = mid - 1;
}

let result = end;
// console.log(K, N);
// console.log(start, end);
console.log(result);
