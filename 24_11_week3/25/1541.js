const readText = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = `./24_11_week3/25/ip/${addr}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e);
  }
};

const iData = readText("1541");
/**
 * 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소
 * : Greedy [DFS]
 */
let numsMinus = iData.split(`-`);
for (let i in numsMinus) {
  let nums = numsMinus[i];
  let sum = nums
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  numsMinus[i] = sum;
}
let min = numsMinus[0];
for (let i = 1; i < numsMinus.length; i++) {
  min -= numsMinus[i];
}
console.log(`${min}`);

// console.log(`----test`);
// console.log(`${numsMinus.join("|")}`);
