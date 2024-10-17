/** https://www.acmicpc.net/problem/11005 */
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

const ip = input("11005");
let op = "";
/**
 * @todo 0.5sec 256MB
 * @description 진법 변환 2 [11005]
 */
let alpha = "";
const [N, B] = ip.split(" ").map(Number);
op = N.toString(B).toUpperCase();
console.log(op);
