function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_11382.txt");
let op = 0;
for (let n of ip.split(" ")) {
  op += parseInt(n);
}
console.log(op);
