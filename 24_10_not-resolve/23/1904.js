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

let iData = readTextFile("1904.txt");
const N = Number(iData);

const dp = Array(N + 1).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

// console.log(`-- test --`);
console.log(dp[N]);
