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

const ip = readInput("11022.txt");
let op = "";

const arr = ip.trim().split("\n");
const t = arr[0];
for (let i = 1; i <= t; i++) {
  let tc = arr[i].split(" ").map((n) => parseInt(n));
  console.log("Case #%d: %d + %d = %d", i, tc[0], tc[1], tc[0] + tc[1]);
}
