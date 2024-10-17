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

const ip = readInput("5073.txt");
let op = "";

/** Equilateral , Isosceles , Scalene
 * Invalid
 * (가장 긴 변) <= (두 변의 합)
 */
const tris = ip.trim().split("\n");
for (let t of tris) {
  const [a, b, c] = t
    .split(" ")
    .map((n) => n * 1)
    .sort((a, b) => a - b);
  if (a + b + c == 0) break;
  if (a + b <= c) op += "Invalid\n";
  else if (a == b && b == c) op += "Equilateral\n";
  else if (a == b || b == c || a == c) op += "Isosceles\n";
  else op += "Scalene\n";
}
console.log(op);
