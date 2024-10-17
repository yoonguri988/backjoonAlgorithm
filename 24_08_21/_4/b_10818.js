function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_4/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10818.txt");
let op;

const arr = ip.trim().split("\n");
const N = parseInt(arr[0]);
const sArr = arr[1]
  .split(" ")
  .map((n) => parseInt(n))
  .sort((a, b) => a - b);
console.log("%d %d", sArr[0], sArr[N - 1]);
