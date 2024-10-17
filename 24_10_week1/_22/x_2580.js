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

const ip = readInput("2580.txt");
let op = "";

const tsudoku = ip.split("\n").map((v) => {
  return v.split(" ").map(Number);
});
/**
 * blank_coord 빈칸의 좌표리스트
 *
 * usedRow, usedCol, useNine Func.
 * usedRow(y,num) y번째행에 num있는지 검사
 * usedCol(x,num) x번째열에 num있는지 검사
 * usedNine(x,y,num) (x,y)가 속한 3*3에 num있는지 검사
 *
 * check(idx, x, y)
 * 숫자채우고 유효성검사 후 다음 빈칸 찾음
 * go(idx, x, y)
 * 모든 빈칸 채워지면 종료
 */

const blank_coord = [];
for (let i in tsudoku) {
  for (let j in tsudoku[i]) {
    if (tsudoku[i][j] === 0) blank_coord.push([+i, +j]);
  }
}

function check(row, col, value) {
  let threeRow = Math.floor(row / 3) * 3;
  let threeCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < tsudoku.length; i++) {
    if (tsudoku[row][i] == value || tsudoku[i][col] == value) return false;
  }
  for (let i = threeRow; i < threeRow + 3; i++) {
    for (let j = threeCol; j < threeCol + 3; j++) {
      if (tsudoku[i][j] == value) return false;
    }
  }
  return true;
}

function solution(n) {
  if (n == blank_coord.length) {
    for (let arr of tsudoku) {
      op += `${arr.join(" ")}\n`;
    }
    console.log(op);
    process.exit();
  }
  let [row, col] = blank_coord[n];
  for (let i = 0; i < 10; i++) {
    if (check(row, col, i)) {
      tsudoku[row][col] = i;
      solution(n + 1);
      tsudoku[row][col] = 0;
    }
  }
}
solution(0);
