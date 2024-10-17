/** https://www.acmicpc.net/problem/27433 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_21/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("27433");
let op = "";
/**
 * @todo 1sec 1024MB
 * @description 팩토리얼 [27433]
 */

const factorial = (n) => {
  if (n < 2) return 1;
  return n * factorial(n - 1);
};

const N = Number(ip);
console.log(factorial(N));
