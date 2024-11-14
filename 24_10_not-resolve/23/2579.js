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

let iData = readTextFile("2579.txt");
const [N, ...STAIRS] = iData.split("\r\n").map(Number);
const dp = Array(N).fill(0);
dp[0] = STAIRS[0];
dp[1] = Math.max(STAIRS[0] + STAIRS[1], STAIRS[1]);
dp[2] = Math.max(STAIRS[0] + STAIRS[2], STAIRS[1] + STAIRS[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + STAIRS[i - 1] + STAIRS[i],
    dp[i - 2] + STAIRS[i]
  );
}
console.log(Math.max(...dp));
