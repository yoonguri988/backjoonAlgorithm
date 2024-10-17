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

const ip = readInput("10807.txt");
let op = 0;

const arr = ip.trim().split("\n");
const N = parseInt(arr[0]);
const nArr = arr[1].split(" ").map((n) => parseInt(n));
const v = parseInt(arr[2]);

let dic = {};
for (let i = 0; i < N; i++) {
  if (!dic[nArr[i]]) dic[nArr[i]] = 1;
  else dic[nArr[i]]++;
}
if (dic[v]) op = dic[v];
console.log(op);
