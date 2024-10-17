function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_25/_11/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("24262.txt");
/**
 * 수행횟수
 * 수행횟수를 다항식으로 나타내었을 때, 최고차항
 * 단, 다항식 안되거나 3보다 크면 4
 */
console.log(1);
console.log(0);
