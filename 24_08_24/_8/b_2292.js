function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_8/ip/" + addr;

  try {
    const data = fs.readFileSync(addr).toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2292.txt");
let op = 1;
/**
 * 13번 3개의 방을 지남
 * 58번 5개의 방을 지남
 * 1 = 1
 * 2~7 = 2 (6) <= 1+6n
 * 8~19 = 3 (12)
 * 20~37 = 4 (18)
 * 38~61 = 5 (24)
 */
const N = parseInt(ip.trim());
let arr = Array(1).fill(1);
let [x, i] = [1, 0];
while (arr[i] < N) {
  arr.push(arr[i] + 6 * x);
  i++;
  x++;
}
op = arr.length;
console.log(op);
