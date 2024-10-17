function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_11/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("24313.txt");
const [a0a1, c, n0] = ip.split("\n");
const [a0, a1] = a0a1.split(" ").map((x) => x * 1);
if (a0 * n0 + a1 <= c * n0 && a0 <= c) console.log(1);
else console.log(0);
