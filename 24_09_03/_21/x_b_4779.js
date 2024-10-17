const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_21/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("4779.txt");
let op = "";

const nums = ip.split("\n").map(Number);
const cantor = (num) => {
  let divid = Math.floor(num / 3);
  if (!divid) return "-";
  let space = "";
  for (let i = divid; i < divid * 2; i++) {
    space += " ";
  }
  return `${cantor(divid)}${space}${cantor(divid)}`;
};

for (let num of nums) {
  let n = Math.pow(3, num);
  op += `${cantor(n)}\n`;
}

console.log(op);
