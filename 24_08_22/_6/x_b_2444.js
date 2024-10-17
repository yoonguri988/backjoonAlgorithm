function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_6/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2444.txt");
let op = "";

const N = parseInt(ip.trim());
let starArr = Array(N * 2 - 1).fill(" ");

let len = Math.floor((N * 2 - 1) / 2); //4

for (let i = 0; i <= len; i++) {
  starArr[len - i] = "*";
  starArr[len + i] = "*";

  let spArr = [...starArr];
  let lastIdx = spArr.lastIndexOf("*") + 1;
  spArr.splice(lastIdx, spArr.length - 1 - lastIdx);

  op += spArr.join("") + "\n";
}

for (let i = len; i > 0; i--) {
  starArr[len - i] = " ";
  starArr[len + i] = " ";

  let spArr = [...starArr];
  let lastIdx = spArr.lastIndexOf("*") + 1;
  spArr.splice(lastIdx, spArr.length - 1 - lastIdx);

  op += spArr.join("") + "\n";
}

console.log(op);
