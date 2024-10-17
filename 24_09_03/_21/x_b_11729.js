const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_21/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("11729.txt");
let op = "";
/**
 * num 원반의 개수
 * from 출발지 기둥번호
 * to 목적지 기둥번호
 * other 나머지 기둥 번호
 */
let N = Number(ip);
let answer = [];
let cnt = 0;
const Hanoi = (num, from, other, to) => {
  if (num == 0) return;
  // 받아온 원반의 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 이동
  Hanoi(num - 1, from, to, other);
  // 맨 아래 원반을 목적지로 이동
  op += `${from} ${to}\n`;
  cnt++;
  // 다른 곳으로 옮겼던 원반들을 그위에 얹음
  Hanoi(num - 1, other, from, to);
};
Hanoi(N, "1", "2", "3");
op = cnt + "\n" + op;
console.log(op);
