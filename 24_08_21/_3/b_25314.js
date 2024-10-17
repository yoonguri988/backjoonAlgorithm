function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/25314.txt");
let op = "";

/**
 * long int = 4 byte
 * long long int = 8 byte
 * . . .
 * long long long long int = 16 byte
 */
let N = parseInt(ip);
op = Array(N / 4).fill("long");
console.log("%s int", op.join(" "));
