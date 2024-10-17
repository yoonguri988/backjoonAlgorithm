/** https://www.acmicpc.net/problem/2563 */
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

const ip = input("2563");
let op = 0;
/**
 * @todo 1sec 128MB
 * @description 색종이 [2588]
 * 10 X 10의 검정 색종이
 */
const [N, ...points] = ip.split("\n");
let whitePaper = Array.from(Array(100), () => Array(100).fill(false));
for (let point of points) {
  let [x, y] = point.split(" ").map(Number);
  for (let i = x; i < Number(x + 10); i++) {
    for (let j = y; j < Number(y + 10); j++) {
      if (whitePaper[i][j]) continue;
      else whitePaper[i][j] = true;
    }
  }
}
for (let wps of whitePaper) {
  wps = wps.filter((v) => v);
  op += wps.length;
}
console.log(op);
