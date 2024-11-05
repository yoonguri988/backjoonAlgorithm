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

const inputData = inputTextFile("9184.txt");
const numArr = inputData.split("\r\n");

const dp = Array.from(Array(21), () =>
  Array.from(Array(21), () => Array(21).fill(0))
);
function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c]) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }
  return dp[a][b][c];
}

for (let nums of numArr) {
  let [a, b, c] = nums.split(" ").map(Number);
  if (a == b && b == c && a == -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
