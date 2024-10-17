function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_10/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("9063.txt");
let op = "";

const [N, ...dots] = ip.trim().split("\n");
let [minX, minY, maxX, maxY] = [10000, 10000, -10000, -10000];
for (let dot of dots) {
  const [x, y] = dot
    .trim()
    .split(" ")
    .map((x) => x * 1);
  if (minX > x) minX = x;
  if (minY > y) minY = y;
  if (maxX < x) maxX = x;
  if (maxY < y) maxY = y;
}
op = `${Math.abs(maxX - minX) * Math.abs(maxY - minY)}`;
console.log(op);
