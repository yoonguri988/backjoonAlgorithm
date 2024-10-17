function readQuest(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readQuest("ip/ip_1001.txt");
let op = 0;

let A = ip.split(" ")[0];
let B = ip.split(" ")[1];
console.log(A - B);
