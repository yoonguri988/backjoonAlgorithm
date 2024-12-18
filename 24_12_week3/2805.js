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

const iData = readText("2805");
/**
 * 2805 나무 자르기
 * Need: 나무 M 미터
 * - 목재 절단기:
 *   1. 높이 H 지정.
 *   2. 톱날이 0부터 H까지 올라감
 *   3. 한 줄에 연속해 있는 나무 절단
 * Wanted:
 *  적어도 M미터 가져가려면, H의 최댓값?
 * limited:
 *  * 1 ≤ N ≤ 1,000,000
 *  * 1 ≤ M ≤ 2,000,000,000
 *  * 1 ≤ TREES[i] ≤ 1,000,000
 *  * 0 ≤ H
 */
const [[N, M], TREES] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));
TREES.sort((a, b) => b - a);

let [start, end] = [0, TREES[0]];
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = TREES.reduce((a, b) => a + (b > mid ? b - mid : 0), 0);
  if (sum >= M) start = mid + 1;
  else end = mid - 1;

  if (sum >= M) result = mid;
}

// console.log(N, M);
// console.log(TREES);
console.log(result);
