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

const ip = readText("1520");
const [[N, M], ...hillMaps] = ip.split("\r\n").map((v) => {
  return v.split(" ").map(Number);
});

const offset = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const dp = Array.from(Array(N), () => Array(M).fill(-1));
dp[N - 1][M - 1] = 1;

const dfs = (x, y) => {
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }

  let cnt = 0;
  for (let i = 0; i < offset.length; i++) {
    const nx = x + offset[i][0];
    const ny = y + offset[i][1];
    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      hillMaps[x][y] > hillMaps[nx][ny]
    ) {
      cnt += dfs(nx, ny);
    }
  }
  dp[x][y] = cnt;
  return cnt;
};

const res = dfs(0, 0);
// console.log(dp);
console.log(res);
// console.log(N, M);
// console.log(hillMaps);
