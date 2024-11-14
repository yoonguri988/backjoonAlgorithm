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

let iData = readTextFile("1932.txt");
const [N, ...TRI_NUMS] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

let dp = [...TRI_NUMS];
for (let i = 1; i < N; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    if (j == 0) dp[i][j] += dp[i - 1][j];
    else if (j == dp[i].length - 1) dp[i][j] += dp[i - 1][j - 1];
    else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
}
console.log(Math.max(...dp[N - 1]));

// console.log("----test");
// console.log(`${N}`);
// console.log(`${TRI_NUMS.join("\n")}`);
// console.log(`${dp.join("|")}`);
