function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_9/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2501.txt");
let op = "";

const [N, K] = ip
  .trim()
  .split(" ")
  .map((n) => n * 1);
let arr = [1];
for (let i = 2; i <= N; i++) {
  if (N % i == 0 && !arr.includes(i)) arr.push(i);
}
op = arr.length < K ? 0 : arr[K - 1];
console.log(op);
