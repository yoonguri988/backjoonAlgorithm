const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_31/_16/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("10773.txt");
let op = "";
/**
 * 잘못된 수를 부를 때마다 0
 *  => 가장 최근에 작성한 수를 지움
 * 받아 적은 수의 합
 */
let [K, ...Nums] = ip.split("\n").map(Number);
let sum = 0;
let arr = [];
for (let i = 0; i < K; i++) {
  if (Nums[i]) {
    arr.push(Nums[i]);
  } else {
    arr.pop();
  }
}

arr.forEach((v) => (sum += v));
console.log(sum);
