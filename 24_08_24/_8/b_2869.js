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

const ip = readInput("2869.txt");
let op = "op";

const [A, B, V] = ip
  .trim()
  .split(" ")
  .map((n) => n * 1);
op = Math.ceil((V - B) / (A - B));
console.log(op);
