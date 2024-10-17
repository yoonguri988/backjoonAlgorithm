/** https://www.acmicpc.net/problem/10870 */
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

const ip = input("10870");
let op = "";
/**
 * @todo 1sec 256MB
 * @description 피보나치 수 5 [10870]
 */

const Fibo = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return Fibo(n - 1) + Fibo(n - 2);
};

const N = Number(ip);
console.log(Fibo(N));
