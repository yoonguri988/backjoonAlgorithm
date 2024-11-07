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

let iData = readTextFile("1149.txt");
const [N, ...RGBs] = iData.split("\r\n").map((v) => {
  return v.split(" ").map(Number);
});

const dp = Array.from(Array(N[0]), () => Array(3).fill(0));
dp[0] = RGBs[0];

for (let i = 1; i < N[0]; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + RGBs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + RGBs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + RGBs[i][2];
}

console.log(Math.min(...dp[N[0] - 1]));
