function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_7/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2566.txt");
let op = "";

/** 행렬안에서의 최댓값, 해당위치까지 */
let [x, y] = [0, 0];
let maxNum = 0;

const nArr = ip.trim().split("\n");
for (let i in nArr) {
  const mArr = nArr[i].split(" ").map((n) => n * 1);
  for (let j in mArr) {
    if (maxNum <= mArr[j]) {
      maxNum = mArr[j];
      [x, y] = [i * 1 + 1, j * 1 + 1];
    }
  }
}
op = maxNum + "\n" + x + " " + y;

console.log(op);
