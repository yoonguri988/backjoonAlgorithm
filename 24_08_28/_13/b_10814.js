function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_28/_13/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10814.txt");
let op = "";
const [N, ...memInfo] = ip.split("\n");
for (let i in memInfo) {
  memInfo[i] = [i, ...memInfo[i].split(" ")];
}
memInfo.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});
for (let mem of memInfo) {
  op += mem[1] + " " + mem[2] + "\n";
}
console.log(op);
