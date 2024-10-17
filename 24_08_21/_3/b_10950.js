function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/10950.txt");
let op;

const arr = ip.trim().split("\r\n");
const T = arr[0];

for (let i = 0; i < T; i++) {
  let testC = arr[i + 1].split(" ").map(function (n) {
    return parseInt(n);
  });
  console.log(testC[0] + testC[1]);
}
