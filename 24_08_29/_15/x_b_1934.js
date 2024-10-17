function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1934.txt");
let op = "";

let [T, ...testCases] = ip.split("\n");
for (let tc of testCases) {
  let [A, B] = tc.split(" ").map(Number);
  let gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
  };
  op += (A * B) / gcd(A, B) + "\n";
}
console.log(op);
