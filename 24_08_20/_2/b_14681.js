function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
}

/**
 * 런타임 에러 EACCES
 * 권한이 없어서 생기는 에러이며, 경로를 0으로 변경
 */
const ip = readInput("./24_08_20/_2/ip/ip_14681.txt");
let op = 4;

const pArr = ip.split("\n");
const x = pArr[0];
const y = pArr[1];

if (x > 0 && y > 0) {
  op = 1;
} else if (x < 0 && y > 0) {
  op = 2;
} else if (x < 0 && y < 0) {
  op = 3;
}
console.log(op);
