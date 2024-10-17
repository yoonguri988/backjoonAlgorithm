/** 1463 1로 만들기 */
const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week3/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readInput("1463.txt");
let op = "";

const N = Number(ip);
let cnt = 0;
let dp = [[N]];

for (let i = 0; i < dp.length; i++) {
  let arr = [];
  for (let j = 0; j < dp[i].length; j++) {
    if (dp[i][j] == 0) continue;
    if (dp[i][j] == 1) break;

    tmp = Array(2).fill(0);
    if (dp[i][j] % 2 == 0) tmp[0] = dp[i][j] / 2;
    if (dp[i][j] % 3 == 0) tmp[0] = dp[i][j] / 3;
    tmp[1] = dp[i][j] - 1;
    arr = [...arr, ...tmp];
  }
  cnt++;
  if (Math.min(...arr) == 1) break;
  dp[cnt] = [...arr];
}
console.log(`${cnt}`);
