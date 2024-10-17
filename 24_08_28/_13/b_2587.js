function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_28/_13/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2587.txt");
let op = "";
let [avg, center] = [0, 0];

const arr = ip.split("\n").map((n) => +n);
arr.sort();
const len = arr.length;
let sum = 0;
for (let n of arr) {
  sum += n;
}
avg = sum / len;
center = arr[Math.floor(arr.length / 2)];
op = avg + "\n" + center;
console.log(op);
