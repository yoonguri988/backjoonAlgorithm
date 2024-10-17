function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/2739.txt");
let op;

for (var i = 1; i < 10; i++) {
  console.log("%d * %d = %d", ip, i, ip * i);
}
