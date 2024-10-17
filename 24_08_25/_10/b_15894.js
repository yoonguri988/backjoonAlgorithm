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

const ip = readInput("15894.txt");
let op = "";
/**
 * 한변의 길이 * 4
 * r = 1: r*4
 * r = 2: r*4
 * r = 3: r*4
 */
op = ip * 4;
console.log(op);
