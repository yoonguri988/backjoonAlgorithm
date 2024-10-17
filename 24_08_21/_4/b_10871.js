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

const ip = readInput("10871.txt");
let op = 0;

const arr = ip.trim().split("\n");
const N = arr[0].split(" ")[0];
const X = arr[0].split(" ")[1];
const Arr = arr[1].split(" ").map((n) => parseInt(n));

let smArr = [];
for (let i = 0; i < N; i++) {
  if (X > Arr[i]) smArr.push(Arr[i]);
}
console.log(smArr.join(" "));
