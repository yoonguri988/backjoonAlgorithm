/** https://www.acmicpc.net/problem/24723 */
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

const ip = input("24723");
let op = "";
/**
 * @todo 2.022sec 319MB
 * @description 녹색 거탑 [24723]
 */
const N = Number(ip);
console.log(Math.pow(2, N));
