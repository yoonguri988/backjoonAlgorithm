/** https://www.acmicpc.net/problem/10811 */
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

const ip = input("10811");
let op = "";
/**
 * @todo 1sec 256MB
 * @description 바구니 뒤집기 [10811]
 */
const [nmArr, ...cases] = ip.split("\n");
const [N, M] = nmArr.split(" ").map(Number);
let n = 1;
let arr = Array.from(Array(N), () => {
  return n++;
});
for (let k = 0; k < M; k++) {
  const [i, j] = cases[k].split(" ").map((n) => n - 1);
  let tmp = arr.slice(i, j + 1);
  for (let p = i; p < j + 1; p++) {
    arr[p] = tmp[j - p];
  }
}
console.log(arr.join(" "));
