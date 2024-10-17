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

const ip = readInput("11650.txt");
let op = "";

const [N, ...dots] = ip.split("\n");
for (let i in dots) {
  dots[i] = dots[i].split(" ").map((n) => +n);
}
dots.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

for (let d of dots) {
  op += d.join(" ") + "\n";
}
console.log(op);
