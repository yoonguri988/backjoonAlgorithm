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

const iData = readText("11399");
/**
 * 11399 ATM
 * N : 사람 수
 * P : 각 사람이 돈을 인출하는데 걸리는 시간
 */
const [[N], P_ARR] = iData.split("\r\n").map((v) => v.split(" ").map(Number));
P_ARR.sort((a, b) => a - b);
let time = 0;
let sum = 0;
for (let p of P_ARR) {
  sum += p;
  time += sum;
}
// console.log(`${N}`);
// console.log(`${P_ARR.join("|")}`);
console.log(`${time}`);
