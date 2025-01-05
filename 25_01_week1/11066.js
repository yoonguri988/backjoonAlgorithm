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

const ip = readText("11066");

const [T, ...TestCases] = ip.split("\r\n");

for (let i = 0; i < T * 2; i += 2) {
  const N = Number(TestCases[i]);
  const chVals = TestCases[i + 1].split(" ").map(Number);

  const sums = Array(N + 1).fill(0);
  const dp = Array.from(Array(N), () => Array(N).fill(0));
  for (let i = 1; i <= N; i++) {
    sums[i] = sums[i - 1] + chVals[i - 1];
  }

  for (let k = 1; k < N; k++) {
    for (let s = 0; s + k < N; s++) {
      const e = s + k;
      dp[s][e] = Number.MAX_SAFE_INTEGER;

      for (let m = s; m < e; m++) {
        const res = dp[s][m] + dp[m + 1][e] + sums[e + 1] - sums[s];
        dp[s][e] = Math.min(dp[s][e], res);
      }
    }
  }
  console.log(dp[0][N - 1]);
}
