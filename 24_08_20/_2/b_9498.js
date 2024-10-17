function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("./24_08_20/_2/ip/ip_9498.txt");
let op;
const score = parseInt(ip);
if (ip >= 90) {
  op = "A";
} else if (ip >= 80) {
  op = "B";
} else if (ip >= 70) {
  op = "C";
} else if (ip >= 60) {
  op = "D";
} else {
  op = "F";
}
console.log(op);
