/** https://www.acmicpc.net/problem/2480 */
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

const ip = input("2480");
let op = 0;
/**
 * @todo 1sec 128MB
 * @description 주사위 세개 [2480]
 * - 같은 눈 3개, 10000+(눈)*1000
 * - 같은 눈 2개, 1000+(눈)*100
 * - 모두 다른눈, (가장큰눈)*100
 */
const [d1, d2, d3] = ip.split(" ").map(Number);

if (d1 == d2 && d2 == d3) {
  op = 10000 + d1 * 1000;
} else if (d1 == d2 || d1 == d3) {
  op = 1000 + d1 * 100;
} else if (d2 == d3) {
  op = 1000 + d2 * 100;
} else {
  let max = Math.max(d1, d2, d3);
  op = max * 100;
}
console.log(op);
