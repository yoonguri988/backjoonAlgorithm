function readQuest(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readQuest("ip/ip_1000.txt");
let op = 0;
const ipArr = ip.split(" ");
for (let n in ipArr) {
  op += parseInt(ipArr[n]);
}
console.log(op);
