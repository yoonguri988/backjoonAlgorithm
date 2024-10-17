const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week2/_23/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("9184.txt");
let op = "";
/**
 * a,b,c가 주어졌을 때 w(a,b,c) 구하기
 * 마지막 입력은 -1, -1, -1
 */
const abcList = ip.split("\n").map((v) => {
  return v.split(" ").map(Number);
});

const arr = Array.from(Array(21), () =>
  Array.from(Array(21), () => Array(21).fill(0))
);

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (arr[a][b][c]) return arr[a][b][c];

  if (a < b && b < c) {
    arr[a][b][c] = w(a, b, c - 1) + w(a, b, c - 1) - w(a, b - 1, c);
  } else {
    arr[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }
  return arr[a][b][c];
}

for (let abc of abcList) {
  const [a, b, c] = abc;
  if (a == -1 && b == -1 && c == -1) break;
  const result = w(a, b, c);
  console.log(`w(${a}, ${b}, ${c}) = ${result}`);
}
