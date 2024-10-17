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

const ip = readInput("1764.txt");
let op = "";

let [NMs, ...names] = ip.split("\r\n");
let [N, M] = NMs.split(" ").map(Number);
let hearNotNames = names.splice(0, N);
let seeNotNames = [...names];

let set = {};
for (let name of hearNotNames) {
  set[name] = 0;
}
for (let name of seeNotNames) {
  if (set[name] == 0) set[name]++;
  else set[name] = 0;
}
let arr = Object.entries(set)
  .filter((v) => v[1] == 1)
  .sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return 0;
  });
op += arr.length + "\n";
for (let a of arr) {
  op += a[0] + "\n";
}
console.log(op);
