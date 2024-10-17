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

const ip = readInput("14425.txt");
let op = 0;

let [NMs, ...strArr] = ip.split("\r\n");
let [N, M] = NMs.split(" ").map(Number);

let tmp = strArr.splice(0, N);
let set = {};
for (let i in tmp) {
  set[tmp[i]] = i;
}

for (let i in strArr) {
  let str = strArr[i];
  if (set[str]) op++;
}
console.log(op);
