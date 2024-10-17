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

const ip = readInput("10813.txt");
let op;

const arr = ip.trim().split("\n");
const N = parseInt(arr[0].split(" ")[0]);
const M = parseInt(arr[0].split(" ")[1]);

let basket = Array(N).fill(0);
basket.forEach(function (k, i) {
  basket[i] = i + 1;
});

for (let k = 1; k <= M; k++) {
  // i번 과 j번 공을 바꿈
  const ijArr = arr[k].split(" ").map((n) => n - 1);
  const i = ijArr[0];
  const j = ijArr[1];

  let tmp = basket[i];
  basket[i] = basket[j];
  basket[j] = tmp;
}
op = basket.join(" ");
console.log(op);
