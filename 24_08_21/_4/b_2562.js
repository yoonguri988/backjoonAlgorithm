function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_4/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2562.txt");
let op;

const arr = ip
  .trim()
  .split("\n")
  .map((n) => parseInt(n));

let max = 0;
arr.forEach(function (a) {
  if (max < a) max = a;
});
console.log("%d\n%d", max, arr.indexOf(max) + 1);
