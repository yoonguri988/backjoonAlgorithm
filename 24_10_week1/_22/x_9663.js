const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week1/_22/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("9663.txt");
let op = "";

const N = Number(ip);
let visitied = Array(N).fill(0);
let cnt = 0;

const isPossible = (row, col) => {
  for (let i = 0; i < row; i++) {
    if (col == visitied[i]) return false;
    if (Math.abs(col - visitied[i]) == row - i) return false;
  }
  return true;
};
const queen = (row) => {
  if (row == N) {
    cnt++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isPossible(row, i)) {
      visitied[row] = i;
      queen(row + 1);
    }
  }
};
queen(0);
console.log(cnt);
