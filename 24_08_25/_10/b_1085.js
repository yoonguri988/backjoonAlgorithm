function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_10/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1085.txt");
let op = "";

const [x, y, w, h] = ip.trim().split(" ");
const arr = [x, y, w - x, h - y].map((x) => Math.abs(x)).sort((a, b) => a - b);
op = arr[0];
console.log(arr);
console.log(op);
