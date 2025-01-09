const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week2/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readText("1725");
const [N, ...histo] = ip.split("\r\n").map(Number);

const calculate = (stack, len, MAX) => {
  const target = stack.pop()[0];
  let width = 0;
  if (!stack.length) width = len;
  else width = len - stack[stack.length - 1][1] - 1;
  MAX = Math.max(MAX, width * target);

  return [stack, MAX];
};

let stack = [];
let MAX = 0;
for (let i = 0; i < N; i++) {
  while (stack.length && stack[stack.length - 1][0] > histo[i]) {
    [stack, MAX] = calculate(stack, i, MAX);
  }
  stack.push([histo[i], i]);
}
while (stack.length) {
  [stack, MAX] = calculate(stack, N, MAX);
}
console.log(MAX);
