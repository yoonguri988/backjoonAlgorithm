/** https://www.acmicpc.net/problem/15552 */
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

const ip = input("15552");
let op = "";
/**
 * @todo 1sec 512MB
 * @description 빠른 A+B [15552]
 */
const [N, ...testCases] = ip.split("\n");
for (let tc of testCases) {
  const [A, B] = tc.split(" ").map(Number);
  op += A + B + "\n";
}
console.log(op);
