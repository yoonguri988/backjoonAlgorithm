function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/11021.txt");
let op;

const tmpArr = ip.trim().split("\r\n");
const T = parseInt(tmpArr[0]);
for (let i = 1; i <= T; i++) {
  const tc = tmpArr[i].split(" ").map((n) => parseInt(n));
  console.log("Case #%d: %d", i, tc[0] + tc[1]);
}
