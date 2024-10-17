function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const ip = readInput("./24_08_20/_2/ip/ip_1330.txt");
const nArr = ip.split(" ");
const A = parseInt(nArr[0]);
const B = parseInt(nArr[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
