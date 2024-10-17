function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_10869.txt");
const A = parseInt(ip.split(" ")[0]);
const B = parseInt(ip.split(" ")[1]);
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
