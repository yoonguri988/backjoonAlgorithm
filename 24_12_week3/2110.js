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

const iData = readText("2110");
/**
 * 2110 공유기 설치
 */
const input = iData.split("\r\n");
const [N, C] = input.shift().split(" ").map(Number);
const POINTS = [...input].map(Number).sort((a, b) => a - b);

let res = 0;
let [start, end] = [1, POINTS[N - 1]];

const isPossible = (dist) => {
  let cnt = C - 1;
  let prePoint = POINTS[0];
  for (let i = 1; i < N; i++) {
    if (POINTS[i] - prePoint >= dist) {
      prePoint = POINTS[i];
      cnt--;
    }
  }
  return cnt <= 0;
};

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (isPossible(mid)) start = mid + 1;
  else end = mid - 1;
}
// res = end;

// console.log(N, C);
// console.log(POINTS);
console.log(end);
