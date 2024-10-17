let readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("4134.txt");
let op = "";

let [T, ...tcs] = ip.split("\n").map(Number);

const prime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

for (let tc of tcs) {
  while (!prime(tc)) {
    tc++;
  }
  op += tc + "\n";
}
console.log(op);
