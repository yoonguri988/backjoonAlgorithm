function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_5/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2908.txt");
let op = 0;

let [A, B] = ip.trim().split(" ");
A = A.split("").reverse().join("");
B = B.split("").reverse().join("");
op = A * 1 > B * 1 ? A : B;
console.log(op);
