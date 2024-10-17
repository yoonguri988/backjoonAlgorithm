function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("19532.txt");
let op = "";

const [a, b, c, d, e, f] = ip.split(" ").map(Number);
let [x, y] = [0, 0];
if (a == 0 || d == 0) {
  y = (f * a - c * d) / (e * a - d * b);
  x = (c - b * y) / a || (f - e * y) / d;
} else if (b == 0 || e == 0) {
  x = (f * b - c * e) / (d * b - e * a);
  y = (f - d * x) / e || (c - a * x) / b;
} else {
  y = (f * a - c * d) / (e * a - d * b);
  x = (f * b - c * e) / (d * b - e * a);
}
console.log(`${x} ${y}`);
