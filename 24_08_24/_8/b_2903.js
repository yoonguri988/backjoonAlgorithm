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

const ip = readInput("2903.txt");
let op = "";
/**
 * a0 = 2
 * a1 = 3 2+1
 * a2 = 5 3+2
 * a3 = 9 5+4
 * a4 = 17 9+8
 * *   ⁝
 * a5 = 17+16**2  1089
 */
const N = parseInt(ip.trim());
let arr = Array(N + 1).fill(2);
for (let i = 1; i < arr.length; i++) {
  arr[i] = arr[i - 1] + (arr[i - 1] - 1);
}
op = Math.pow(arr[N], 2);
console.log(op);
