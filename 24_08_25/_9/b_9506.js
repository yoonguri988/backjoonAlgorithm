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

const ip = readInput("9506.txt");
let op = "";

const tcs = ip
  .trim()
  .split("\n")
  .map((n) => n * 1);
for (let tc of tcs) {
  if (tc == -1) break;
  let divArr = [1];
  let sum = 1;
  for (let i = 2; i < tc; i++) {
    if (tc % i == 0 && !divArr.includes(i)) {
      divArr.push(i);
      sum += i;
    }
  }
  if (sum == tc) op += `${tc} = ` + divArr.join(" + ") + "\n";
  else op += `${tc} is NOT perfect.\n`;
}
console.log(op);
