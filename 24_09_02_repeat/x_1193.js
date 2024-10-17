/** https://www.acmicpc.net/problem/1193 */
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

const ip = input("1193");
let op = "";
/**
 * @todo 1sec 256MB
 * @description 분수 찾기 [1193]
 */

const N = Number(ip);
let limit = 1,
  n = 1;
while (limit < N) {
  limit += n + 1;
  n++;
}

const a = n - (limit - N);
if (n % 2 == 0) op = `${a}/${n - a + 1}\n`;
else op = `${n - a + 1}/${a}\n`;
console.log(op);
