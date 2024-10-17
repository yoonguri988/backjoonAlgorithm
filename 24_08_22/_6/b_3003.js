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

const ip = readInput("3003.txt");
let op = "";
const chess = [1, 1, 2, 2, 2, 8];
//k, q, l, b, n, p
let find = ip.split(" ").map((n) => n * 1);

let chk = [...chess];
for (let i in find) {
  chk[i] -= find[i];
}
op = chk.join(" ");
console.log(op);
