function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_11/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = BigInt(readInput("24267.txt"));
console.log(
  `${(ip * (ip - BigInt(1)) * (ip - BigInt(2))) / (BigInt(3) * BigInt(2))}`
);
console.log(3);
