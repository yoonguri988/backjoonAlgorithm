let readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {}
};

const ip = readInput("13909.txt");
let op = "";
/**
 * N개의 창문, N명의 사람
 *   i번째 사람은 i의 배수번째 창문을 건듬
 *   (닫혀있으면 열고, 열려있으면 닫음)
 * = 열려있는 창문의 갯수
 *  (N <= 21 * 10^8)
 */
const N = Number(ip);
// const N = 21 * Math.pow(10, 8);
let cnt = 0;
for (let i = 1; i * i <= N; i++) {
  cnt++;
}
op += cnt;
console.log(op);
