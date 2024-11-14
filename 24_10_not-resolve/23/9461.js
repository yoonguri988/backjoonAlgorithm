function readTextFile(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (err) {
    console.error(err);
  }
}

let iData = readTextFile("9461.txt");
const [T, ...NARR] = iData.split("\r\n").map(Number);
const N = Math.max(...NARR);

let dp = Array(N + 1).fill(1);
let result = "";
for (let k of NARR) {
  for (let i = 4; i <= k; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  result += `${dp[k]}\n`;
}
console.log(result);
