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

const inputData = inputTextFile("2580.txt");
const tsudoku = inputData.split("\r\n").map((v) => {
  return v.split(" ").map(Number);
});
let blankList = [];
for (let i = 0; i < tsudoku.length; i++) {
  for (let j = 0; j < tsudoku[i].length; j++) {
    if (tsudoku[i][j] == 0) blankList.push([i, j]);
  }
}

dfs(0);

function dfs(n) {
  if (n == blankList.length) {
    console.log(tsudoku.map((v) => v.join(" ")).join("\n"));
    return;
  }
  let [row, col] = blankList[n];
  for (let i = 0; i < 10; i++) {
    if (checkNum(row, col, i)) {
      tsudoku[row][col] = i;
      dfs(n + 1);

      tsudoku[row][col] = 0;
    }
  }
}

function checkNum(row, col, value) {
  const [r0, c0] = [Math.floor(row / 3) * 3, Math.floor(col / 3) * 3];
  const [r3, c3] = [r0 + 3, c0 + 3];

  // 가로 세로
  for (let i = 0; i < 9; i++) {
    if (tsudoku[i][col] == value || tsudoku[row][i] == value) return false;
  }

  // 3*3 checkCube
  for (let i = r0; i < r3; i++) {
    for (let j = c0; j < c3; j++) {
      if (tsudoku[i][j] == value) return false;
    }
  }

  return true;
}
