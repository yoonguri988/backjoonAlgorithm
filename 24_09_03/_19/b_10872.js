/** https://www.acmicpc.net/problem/10872 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_19/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("10872");
let op = "";
/**
 * @todo 1sec 256MB
 * @description 팩토리얼 [10872]
 */
const N = Number(ip);
op = 1;
for (let i = N; i > 0; i--) {
  op *= i;
}
console.log(op);
