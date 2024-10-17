function readInput(addr) {
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_21/_3/ip/" + addr;

  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2439.txt");
let op = "";

const N = parseInt(ip);
for (let i = 1; i <= N; i++) {
  let arr = Array(N).fill(" ");
  arr.fill("*", N - i, N);
  op += arr.join("") + "\n";
}
console.log(op);
