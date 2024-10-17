/** https://www.acmicpc.net/problem/2444 */
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

const ip = input("2444");
let op = "";
/**
 * @todo 1sec 128MB
 * @description 별찍ㄱ [2444]
 */
const N = Number(ip);
const starArr = Array.from(Array(2 * N - 1), () => Array(2 * N - 1).fill(" "));
const largeN = 2 * N - 1;
let [start, end] = [0, 0];
for (let i = 0; i < largeN; i++) {
  if (i < N) {
    [start, end] = [Math.floor(largeN / 2) - i, Math.floor(largeN / 2) + i + 1];
    for (let j = start; j < end; j++) {
      starArr[i][j] = "*";
    }
  } else {
    start++;
    end--;
    for (let j = start; j < end; j++) {
      starArr[i][j] = "*";
    }
  }
  op += starArr[i].join("").trimEnd() + "\n";
}
console.log(op);
