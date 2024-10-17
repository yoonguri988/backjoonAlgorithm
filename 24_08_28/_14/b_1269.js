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

const ip = readInput("1269.txt");
let op = "";

let [len, errA, errB] = ip.split("\n");
let [A, B] = len.split(" ").map(Number);
errA = errA.split(" ").map(Number);
errB = errB.split(" ").map(Number);

let dict = {};
for (let a of errA) {
  if (dict[a] >= 0) dict[a]++;
  else dict[a] = 0;
}
for (let b of errB) {
  if (dict[b] >= 0) dict[b]++;
  else dict[b] = 0;
}

let arr = Object.values(dict).filter((v) => v == 0);
console.log(arr.length);
