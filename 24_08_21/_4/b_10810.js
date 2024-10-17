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

const ip = readInput("10810.txt");
let op = 0;

const arr = ip.trim().split("\n");
const N = parseInt(arr[0].split(" ")[0]);
const M = arr[0].split(" ")[1];

let basket = Array(N).fill(0);
for (let a = 1; a <= M; a++) {
  const ijkArr = arr[a].split(" ").map((n) => parseInt(n));
  const i = ijkArr[0];
  const j = ijkArr[1];
  const k = ijkArr[2];
  basket.fill(k, i - 1, j);
}
console.log("%s", basket.join(" "));
