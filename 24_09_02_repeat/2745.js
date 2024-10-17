/** https://www.acmicpc.net/problem/2745 */
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

const ip = input("2745");
let op = "";
/**
 * @todo 1sec 128MB
 * @description 진법 변환 [2745]
 */
const [N, B] = ip.split(" ");
op = parseInt(N, B);
console.log(op);
