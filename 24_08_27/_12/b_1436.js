function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1436.txt");
let op = "";

let n = 666;
let arr = [n];
while (arr.length < 10001) {
  n++;
  if (!n.toString().includes("666")) continue;
  arr.push(n);
}
console.log(arr[ip * 1 - 1]);
