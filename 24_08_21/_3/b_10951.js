function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_3/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10951.txt");
let op = "";

const tcArr = ip.trim().split("\n");
for (let i = 0; i < tcArr.length; i++) {
  const tc = tcArr[i].split(" ").map((n) => parseInt(n));
  console.log(tc[0] + tc[1]);
}
