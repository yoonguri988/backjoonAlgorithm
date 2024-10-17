/** https://www.acmicpc.net/problem/2588 */
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

const ip = input("2588");
let op = "";
/**
 * @todo 1sec 128MB
 * @description 곱셈 [2588]
 */
const [N1, N2] = ip.split("\r\n");
op = [];
for (let i = N2.length - 1; i >= 0; i--) {
  let str = "";
  let up = 0;
  for (let j = N1.length - 1; j >= 0; j--) {
    let multi = N1[j] * N2[i] + up;
    str = (multi % 10) + str;
    up = Math.floor(multi / 10);
  }
  op.push(Number(str));
}
op.push(N1 * N2);

console.log(op.join("\n"));
