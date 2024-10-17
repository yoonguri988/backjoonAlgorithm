/** https://www.acmicpc.net/problem/5597 */
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

const ip = input("5597");
let op = "";
/**
 * @todo 1sec 128MB
 * @description 과제 안 내신 분..? [5597]
 * > 제출하지 않은 출석번호중 가장 작은 것
 * > 그 다음 출석번호
 */
const attends = ip.split("\n").map(Number);
attends.sort((a, b) => a - b);
let num = 1;
op = [];
for (let i = 0; i < 30; i++) {
  if (op.length == 2) break;
  let at = attends[i];
  if (num != at) {
    op.push(num);
    i--;
  }
  num++;
}
console.log(op.join("\n"));
