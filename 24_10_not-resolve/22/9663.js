function inputTextFile(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const inputData = inputTextFile("9663.txt");
// 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제
const N = Number(inputData);
let chess = [];
let cnt = 0;

function checkMove(x2, y2) {
  for (let [x1, y1] of chess) {
    // 같은 행에 있는지 확인
    if (x1 == x2 || y1 == y2) return false;
    // 대각선에 있는지 확인
    else if (Math.abs(x1 - x2) == Math.abs(y1 - y2)) return false;
  }
  return true;
}

function dfs(n) {
  if (n == N) {
    cnt++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (checkMove(n, i)) {
      chess.push([n, i]);
      dfs(n + 1);
      chess.pop();
    }
  }
}

dfs(0);

console.log(cnt);
