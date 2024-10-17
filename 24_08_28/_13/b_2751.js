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

const ip = readInput("2751.txt");
let op = "";
const [N, ...nums] = ip.split("\n");
nums.sort((a, b) => a - b);
console.log(nums.join("\n"));
