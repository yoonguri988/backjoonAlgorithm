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

const ip = readInput("10101.txt");
let op = "";

const [a, b, c] = ip
  .trim()
  .split("\n")
  .map((n) => n * 1);

let sum = a + b + c;
if (sum != 180) op = "Error";
else if (a == 60 && b == 60 && c == 60) {
  op = "Equilateral";
} else if (a == b || b == c || a == c) {
  op = "Isosceles";
} else {
  op = "Scalene";
}
console.log(op);
