/** https://www.acmicpc.net/problem/2108 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_20/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("2108");
let op = "";
/**
 * @todo 2sec 256MB
 * @description 통계학 [2108]
 * = 산술평균: N개의 수들의 합을 N으로 나눈 값
 * = 중앙값: N개의 수들을 증가하는 순서로 나열했을 경우
 *   중앙에 위치하는 값
 * = 최빈값: N개의 수들 중 가장 많이 나타나는 값
 * = 범위: N개의 수들중 최댓값과 최솟값의 차이
 */
const [N, ...numArr] = ip.split("\n").map(Number);
numArr.sort((a, b) => b - a);
let dict = {};

//산술평균
let sum = 0;
for (let n of numArr) {
  sum += n;
}
op += `${Math.round(sum / Number(N))}\n`;

// 중앙값
op += `${numArr[Math.floor(N / 2)]}\n`;

// 최빈값
const map = new Map();
let max = 1;
for (let n of numArr) {
  if (map.has(n)) {
    max = Math.max(max, map.get(n) + 1);
    map.set(n, map.get(n) + 1);
  } else map.set(n, 1);
}
const maxArr = [];
for (let [key, val] of map) {
  if (val == max) maxArr.push(key);
}
maxArr.sort((a, b) => a - b);
op += maxArr.length == 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;
// 범위
op += `${Math.abs(numArr[N - 1] - numArr[0])}`;

console.log(op);
