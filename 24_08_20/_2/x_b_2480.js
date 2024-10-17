function readInput(addr) {
  try {
    const fs = require("fs");
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_20/_2/ip/ip_2480.txt");
let op;

/**
 * 1. 같은 눈 3개 = 10000 + {d} * 1000
 * 2. 같은 눈 2개 = 1000 + {d} * 100
 * 3. 모두 다른 눈 = {d:Max} * 100
 */
const diceArr = ip.trim().split(" ");
console.log(diceArr);

const tmp = {};
diceArr.forEach((x) => {
  tmp[x] = (tmp[x] || 0) + 1;
});

let mNum = 0;
for (let x in tmp) {
  if (tmp[x] == 1) {
    op = x * 100;
  } else {
    if (tmp[x] == 3) op = 10000 + x * 1000;
    else op = 1000 + x * 100;
    break;
  }
}
console.log(op);
