function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/8393.txt");
let op = 0;

for (let i = 1; i <= ip; i++) {
  op += i;
}
console.log(op);
