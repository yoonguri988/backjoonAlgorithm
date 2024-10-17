/** https://www.acmicpc.net/problem/2331 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./27_09_02_repeat/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("2331");
let op = "";
/**
 * @todo 2sec 256MB
 * @description 반복수열 [2331]
 */
const [N, P] = ip.split(" ").map(Number);
let dict = {};
dict[N] = 1;

let num = N;
for (let i = 0; i < 100; i++) {
  let chk = Object.values(dict).filter((v) => v > 2);
  if (chk.length) break;
  let nStr = String(num);
  let sumNum = 0;
  for (let nj of nStr) {
    sumNum += Math.pow(nj, P);
  }
  num = sumNum;
  if (!dict[num]) dict[num] = 1;
  else dict[num]++;
}
op = Object.values(dict).filter((v) => v == 1).length;
console.log(op);
