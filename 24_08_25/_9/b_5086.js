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

const ip = readInput("5086.txt");
let op = "";

/**
 * 첫번째 숫자가 "두번째 숫자의 약수" = factor
 * 첫번째 숫자가 "두번째 숫자의 배수" = multiple
 * 둘다 아니라면 = neither
 */
const tcs = ip.trim().split("\n");
for (let tc of tcs) {
  if (tc == "0 0") break;
  const [n1, n2] = tc.trim().split(" ");
  if (n2 % n1 == 0) op += "factor\n";
  else if (n1 % n2 == 0) op += "multiple\n";
  else op += "neither\n";
}
console.log(op);
