const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week1/_22/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("14888.txt");
let op = "";

let [N, nums, oper] = ip.split("\n").map((v) => {
  return v.split(" ").map(Number);
});
const operObj = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => {
    if (a < 0) return -Math.floor(-a / b);
    else return Math.floor(a / b);
  },
};
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
const tmp = [];
function dfs(L) {
  if (L === N - 1) {
    let op1 = nums[0];
    for (let i = 0; i < tmp.length; i++) {
      let op2 = nums[i + 1];
      let idx = tmp[i];
      op1 = operObj[idx](op1, op2);
    }
    if (op1 > max) max = op1;
    if (op1 < min) min = op1;
  }

  for (let i = 0; i < 4; i++) {
    if (!oper[i]) continue;
    oper[i]--;
    tmp.push(i);
    dfs(L + 1);
    oper[i]++;
    tmp.pop();
  }
}

dfs(0);
op = `${max}\n${min}`;
console.log(op);
