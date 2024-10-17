/** https://www.acmicpc.net/problem/1010 */
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

const ip = input("1010");
let op = "";
/**
 * @todo 0.5sec 128MB
 * @description 다리 놓기 [1010]
 */
const factorial = (n) => {
  if (n == 0) return 1;
  if (n < 2) return n;
  return factorial(n - 1) * n;
};

const [N, ...testCases] = ip.split("\n");
for (let i = 0; i < N; i++) {
  let [W, E] = testCases[i].split(" ").map(Number);
  let son = factorial(E);
  let mom = factorial(W) * factorial(E - W);
  op += Math.round(son / mom) + "\n";
}
console.log(op);
