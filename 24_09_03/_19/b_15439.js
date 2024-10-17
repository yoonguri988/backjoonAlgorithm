/** https://www.acmicpc.net/problem/15439 */
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

const ip = input("15439");
let op = "";
/**
 * @todo 2sec 256MB
 * @description 베라의 패션 [15439]
 */
const N = Number(ip);
console.log(N * (N - 1));
