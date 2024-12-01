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

const iData = readText("1780");
/**
 * 1780 종이의 개수
 * N x N 행렬, 값: {-1, 0, 1}
 * (N < 3⁷, N은 3ⁿ꼴)
 * * 모두 같은 수면 그대로 사용
 * * If not. 같은 크기의 9개로 분할
 * result: {-1의 개수}\n{0의 개수}\n{1의 개수}
 */
const data = iData.split("\r\n");
const N = Number(data.shift());
const PAPERS = [...data].map((v) => v.split(" ").map(Number));

let result = { "-1": 0, 0: 0, 1: 0 };

function dfs(x, y, n) {
  if (n < 1) return;
  let cnt = 0;
  let mcnt = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (PAPERS[i][j] === 1) cnt++;
      else if (PAPERS[i][j] === -1) mcnt++;
    }
  }
  // console.log(`${n}:=${cnt !== n * n}, ${mcnt === n * n}\n`);

  let max = n * n;
  if (!cnt && !mcnt) {
    result[0]++;
  } else if (cnt === max) {
    result[1]++;
  } else if (mcnt === max) {
    result["-1"]++;
  } else {
    // 같은 크기로 9분할
    if (n === 3) {
      for (let i = x; i < x + n; i++) {
        for (let j = y; j < y + n; j++) {
          result[PAPERS[i][j]]++;
        }
      }
    } else {
      for (let i = 0; i < n / 3; i++) {
        for (let j = 0; j < n / 3; j++) {
          dfs(x + i * (n / 3), y + j * (n / 3), n / 3);
        }
      }
    }
  }
}

dfs(0, 0, N);
console.log(`${result["-1"]}\n${result[0]}\n${result[1]}`);
