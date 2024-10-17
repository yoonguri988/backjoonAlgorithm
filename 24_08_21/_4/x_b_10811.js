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

const ip = readInput("10811.txt");
let op;

const arr = ip.trim().split("\n");
const [N, M] = arr[0].split(" ").map((n) => n * 1);

let basket = Array(N).fill(0);
basket.forEach((v, i, arr) => {
  arr[i] = i + 1;
});

for (let k = 1; k <= M; k++) {
  let [i, j] = arr[k].split(" ").map((n) => n * 1);
  let newArr = basket.splice(i - 1, j - i + 1).reverse();
  /**
   * splice 중간에 배열 추가/삭제
   * ... spread 배열을 풀어헤침
   * deleteCount == 0 추가
   */
  basket.splice(i - 1, 0, ...newArr);
}
op = basket.join(" ");
console.log(op);
/**
 * 1 2 3 4 5
 * 1 2::
 * 2 1 3 4 5
 * 3 4::
 * 2 1 4 3 5
 * 1 4::
 * 3 4 1 2 5
 * 2 2::
 * 3 4 1 2 5
 */
