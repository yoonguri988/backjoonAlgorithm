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

let iData = readTextFile("1912.txt");
const [N, NARR] = iData.split("\r\n").map((v) => {
  return v.split(" ").map(Number);
});

const dp = Array(N[0]).fill(0);
dp[0] = NARR[0];

for (let i = 1; i < N[0]; i++) {
  if (dp[i - 1] < 0) {
    dp[i] = NARR[i];
    continue;
  }
  dp[i] = dp[i - 1] + NARR[i];
}
console.log(Math.max(...dp));
