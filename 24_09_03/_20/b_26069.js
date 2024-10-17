/** https://www.acmicpc.net/problem/26069 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_20/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("26069");
let op = 0;
/**
 * @todo 1sec 1024MB
 * @description 붙임성 좋은 총총이  [26069]
 * ChongChong이가 제일 먼저 추고 있음
 */
const [N, ...danceUsers] = ip.split("\r\n");
const FIRST_DANCER = "ChongChong";
let set = new Set();
set.add(FIRST_DANCER);
for (let duser of danceUsers) {
  let [p1, p2] = duser.split(" ");
  if (set.has(p1) || set.has(p2)) {
    set.add(p1);
    set.add(p2);
  }
}
console.log(set.size);
