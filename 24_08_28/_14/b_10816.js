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

const ip = readInput("10816.txt");
let op = "";

let [N, havCards, M, chkCards] = ip.split("\n");
havCards = havCards.split(" ").map(Number);
chkCards = chkCards.split(" ").map(Number);
let set = {};
for (let cc of chkCards) {
  set[cc] = 0;
}

for (let hc of havCards) {
  if (set[hc] >= 0) set[hc]++;
}

let arr = [];
for (let i in chkCards) {
  let cc = chkCards[i];
  arr.push(set[cc]);
}
console.log(arr.join(" "));
