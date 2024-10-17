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

const ip = readInput("2941.txt");
let op = 0;

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let word = ip.trim();
let chk = word;
for (let cro of croatia) {
  chk = chk.split(cro);
  if (chk.length > 1) op += chk.length - 1;
  chk = chk.join(" ");
}
op += chk.split("").filter((v, i) => v != " ").length;
console.log(op);
