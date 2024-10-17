function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("ip/ip_10998.txt");
let op = 1;
for (let n of ip.split(" ")) {
  op *= n;
}
console.log(op);
