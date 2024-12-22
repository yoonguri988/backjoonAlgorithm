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

const iData = readText("1920");
/**
 * 1920 수 찾기
 * N: 1 ≤ N ≤ 100,000
 * [N개의 정수]: A
 * M: 1 ≤ M ≤ 100,000
 * [M개의 정수]: B
 * A안에 B가 존재하는 가?
 *
 * 존재하면 1을, 존재하지 않으면 0
 */
const [N, N_ARR, M, M_ARR] = iData.split("\r\n").map((v, i) => {
  if (i % 2 === 0) return Number(v);
  else return v.split(" ").map(Number);
});
N_ARR.sort((a, b) => a - b);

const diff = new Map();
for (let v of N_ARR) {
  diff.set(v, 1);
}

let res = "";
for (let v of M_ARR) {
  res += `${diff.get(v) || 0}\n`;
}
console.log(res);

// console.log(N, M);
// console.log(N_ARR);
// console.log(M_ARR);
// console.log(diff);
