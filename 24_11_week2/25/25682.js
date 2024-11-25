const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_11_week2/25/ip/${addr}.txt`;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("25682");
/**
 * 체스판 다시 칠하기 2
 * 보드가 체스판처럼 칠해져 있다는 보장이 없어서,
 * 지민이는 K×K 크기의 체스판으로 잘라낸 후,
 * "몇 개의 정사각형을 다시 칠해야겠다"
 * * K×K 크기는 아무데서나 골라도 됨
 * 다시 칠해야 하는 정사각형의 개수 (*최소)
 */
const I_ARR = iData.split("\r\n");
const [N, M, K] = I_ARR.shift().split(" ").map(Number);
const BOARD = [...I_ARR].map((v) => v.split(""));

const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
const checkBoard = (c) => {
  let value = 0;
  let cnt = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if ((i + j) % 2 === 0) value = BOARD[i][j] != c ? 1 : 0;
      else value = BOARD[i][j] == c ? 1 : 0;
      dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] - dp[i][j] + value;
    }
  }
  for (let i = 1; i <= N - K + 1; i++) {
    for (let j = 1; j <= M - K + 1; j++) {
      cnt = Math.min(
        cnt,
        dp[i - 1 + K][j - 1 + K] -
          dp[i - 1 + K][j - 1] -
          dp[i - 1][j - 1 + K] +
          dp[i - 1][j - 1]
      );
    }
  }
  return cnt;
};

let ans = Math.min(checkBoard("B"), checkBoard("W"));
console.log(`${ans}`);
// console.log(`${N} ${M} ${K}`);
// console.log(`${BOARD.join("\n")}`);
// console.log(`${dp.join("\n")}`);
// console.log(`${ans} === 2`);
