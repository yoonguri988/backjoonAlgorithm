function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_9/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1978.txt");
let op = "";

let arr = Array(1001).fill(0);
arr[0] = 1;
arr[1] = 1;
const [N, nums] = ip.trim().split("\n");

for (let i = 2; i < Math.sqrt(arr.length); i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] == 1) continue;
    if (j % i == 0 && i != j) arr[j] = 1;
  }
}

let cnt = 0;
for (let n of nums.split(" ")) {
  if (arr[n] == 0) cnt++;
}
console.log(cnt);
