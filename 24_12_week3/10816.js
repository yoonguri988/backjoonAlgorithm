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

const iData = readText("10816");
/**
 * 10816 숫자 카드 2
 *  숫자 카드 N개를 가지고 있다
 *  정수 M개가 주어졌을 때,
 *  이 수가 적혀있는 숫자 카드를 상근이가 몇 개
 * * 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)
 * * 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다
 * * M(1 ≤ M ≤ 500,000)
 * * 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수
 */
const [N, N_ARR, M, M_ARR] = iData.split("\r\n").map((v, i) => {
  if (i % 2 === 0) return Number(v);
  else return v.split(" ").map(Number);
});
N_ARR.sort((a, b) => a - b);

const diff = {};
for (let v of M_ARR) {
  diff[v] = 0;
}
for (let v of N_ARR) {
  if (diff[v] >= 0) diff[v]++;
}
let res = Array(M).fill(0);
for (let i in M_ARR) {
  res[i] = diff[M_ARR[i]];
}
console.log(res.join(" "));
// console.log([...diff.values()].join(" "));
