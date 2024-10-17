function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("./24_08_20/_2/ip/ip_2753.txt");
let op = 0;

const year = parseInt(ip);
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  op = 1;
}
console.log(op);
