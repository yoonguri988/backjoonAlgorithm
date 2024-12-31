const readText = (fileNm) => {
  const fs = require("fs");
  let addr;
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./25_01_week1/ip/${fileNm}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
  }
};

const ip = readText("11049");

const [[N], ...rcArr] = ip.split("\r\n").map((v) => v.split(" ").map(Number));
const dp = Array.from(Array(N), () => Array(N).fill(0));

for (let k = 1; k < N; k++) {
  for (let s = 0; s + k < N; s++) {
    const e = s + k;
    dp[s][e] = Number.MAX_SAFE_INTEGER;
    for (let m = s; m < e; m++) {
      const tmp = rcArr[s][0] * rcArr[m][1] * rcArr[e][1];
      dp[s][e] = Math.min(dp[s][e], dp[s][m] + dp[m + 1][e] + tmp);
    }
  }
}
console.log(dp[0][N - 1]);

// console.log(rcArr.join("\n"));
// console.log(dp.join("\n"));
