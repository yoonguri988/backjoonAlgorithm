function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_8/ip/" + addr;

  try {
    const data = fs.readFileSync(addr).toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("11005.txt");
let op = "";
/**
 * A:10, B:11, … F:15, … Z:35
 */
const [N, B] = ip
  .trim()
  .split(" ")
  .map((n) => n * 1);

op = N.toString(B).toUpperCase();
console.log(op);
