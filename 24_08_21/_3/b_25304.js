function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_21/_3/ip/25304.txt");
let op;

const arr = ip.trim().split("\r\n");
const X = parseInt(arr[0]);
const N = parseInt(arr[1]);

let tot = 0;
const abArr = arr.splice(2);
for (let ab of abArr) {
  let tmp = ab.split(" ").map((n) => parseInt(n));
  tot += tmp[0] * tmp[1];
}
console.log("%s", X == tot ? "Yes" : "No");
