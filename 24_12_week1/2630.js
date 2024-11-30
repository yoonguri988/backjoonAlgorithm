const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week1/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("2630");
/**
 * 2630 색종이
 */

const [[N], ...PAPERS] = iData
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));

const counts = {
  white: 0,
  blue: 0,
};

// 재귀이용 dfs
function dfs(x, y, len) {
  let cnt = 0;
  for (let i = x; i < x + len; i++) {
    for (let j = y; j < y + len; j++) {
      if (PAPERS[i][j]) cnt++;
    }
  }

  if (!cnt) {
    // 1의 개수가 0이면 white++
    counts.white++;
    // 1의 개수가 N*N이면 blue++
  } else if (cnt === len * len) {
    counts.blue++;
  } else {
    // 종이를 4분할 하여 재귀호출
    let hLen = len / 2;
    dfs(x, y, hLen); // 0, 0
    dfs(x, y + hLen, hLen); // 0, N/2
    dfs(x + hLen, y, hLen); // N/2, 0
    dfs(x + hLen, y + hLen, hLen); // N/2, N/2
  }
}

dfs(0, 0, N);
// console.log(`${N}`);
// console.log(`${PAPERS.join("\n")}`);
console.log(`${counts.white}\n${counts.blue}`);
