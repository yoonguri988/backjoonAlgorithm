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

const ip = readInput("3009.txt");
let op = "";

const dots = ip.trim().split("\n");
let xArr = [];
let yArr = [];
for (let dot of dots) {
  const [x, y] = dot
    .trim()
    .split(" ")
    .map((n) => n * 1);
  if (xArr.indexOf(x) == -1) xArr.push(x);
  else xArr.splice(xArr.indexOf(x), 1);

  if (yArr.indexOf(y) == -1) yArr.push(y);
  else yArr.splice(yArr.indexOf(y), 1);
}
op = `${xArr[0]} ${yArr[0]}`;
console.log(op);
