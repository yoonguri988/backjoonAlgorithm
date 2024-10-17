function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1018.txt");
let op = 64;
const [NM, ...board] = ip.split("\r\n");
const [N, M] = NM.split(" ").map((n) => +n);

/**
 * 8 X 8 으로 보드판을 자르고
 * 다시 색칠할 건수?
 */
let chess = Array.from(Array(8), () => Array(8).fill("B"));
chess.forEach((v, i, arr) => {
  if (i % 2 == 0) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 1) arr[i][j] = "W";
    }
  } else {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) arr[i][j] = "W";
    }
  }
});
let chess2 = Array.from(Array(8), () => Array(8).fill("B"));
chess2.forEach((v, i, arr) => {
  if (i % 2 == 0) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 != 1) arr[i][j] = "W";
    }
  } else {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 != 0) arr[i][j] = "W";
    }
  }
});

let [startM, deleteCount] = [0, 8];
let [startN, endN] = [0, 8];

while (endN <= N) {
  for (let i = startM; i < M - deleteCount + 1; i++) {
    let [sqCont, sqCont2] = [0, 0];
    let b = 0;
    for (let j = startN; j < endN; j++) {
      let spChess = board[j].split("").splice(i, deleteCount);
      let chkChess = spChess.filter((v, k) => chess[b][k] == v) || [];
      let chk2Chess = spChess.filter((v, k) => chess2[b][k] == v) || [];
      for (let cc of chkChess) {
        sqCont += cc.length;
      }
      for (let cc of chk2Chess) {
        sqCont2 += cc.length;
      }
      b++;
    }
    if (op > sqCont) op = sqCont;
    if (op > sqCont2) op = sqCont2;
  }
  startN++;
  endN++;
}
console.log(op);
