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

const ip = readInput("2447.txt");
let op = "";
/**
 * N 은 3의 거듭제곱
 * N의 패턴은 N * N 정사각형 모양
 * @example
 * N = 3
 * | *** |
 * | * * |
 * | *** |
 *
 * 크기 N의 패턴은 공백으로 채워진
 * 가운데 (N/3) * (N/3) 정사각형의 크기를
 * 패턴으로 둘러싼 형태
 *
 * @inputValue 어떤 정수 k에 대해 mod(3,k) = N
 */
const N = Number(ip);
const starFunc = (i, j, num) => {
  if (i % 3 == 1 && j % 3 == 1) {
    op += " ";
  } else {
    if (num == 1) op += "*";
    else starFunc(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    starFunc(i, j, N);
  }
  op += "\n";
}
console.log(op);
