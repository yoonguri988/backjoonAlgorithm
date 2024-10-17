function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_10430.txt");
const A = parseInt(ip.split(" ")[0]);
const B = parseInt(ip.split(" ")[1]);
const C = parseInt(ip.split(" ")[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
