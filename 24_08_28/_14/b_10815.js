function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_28/_14/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10815.txt");
let op = "";

let [N, haveNums, M, chkNums] = ip.split("\n");
haveNums = haveNums.split(" ").map(Number);
chkNums = chkNums.split(" ").map(Number);

let object = {};
for (let i in chkNums) {
  object[chkNums[i]] = i;
}
let arr = Array(Number(M)).fill(0);
for (let i in haveNums) {
  arr[object[haveNums[i]]] = 1;
}

op = arr.join(" ");
console.log(op);
