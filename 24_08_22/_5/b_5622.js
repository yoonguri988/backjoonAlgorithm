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

const ip = readInput("5622.txt");
let op = 0;

const alphaArr = ip.trim().split("");
const cellNum = {
  "": 1,
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

for (let a of alphaArr) {
  for (let k of Object.keys(cellNum)) {
    if (k.includes(a)) {
      op += cellNum[k] + 1;
      break;
    }
  }
}
console.log(op);
