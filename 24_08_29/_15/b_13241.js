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

const ip = readInput("13241.txt");
let op = "";
let [A, B] = ip.split(" ").map(Number);
let gcd = (a, b) => {
  if (b == 0) return a;
  return gcd(b, a % b);
};
console.log((A * B) / gcd(A, B));
