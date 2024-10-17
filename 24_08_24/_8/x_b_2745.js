function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_8/ip/" + addr;

  try {
    const data = fs.readFileSync(addr).toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2745.txt");
let op = 0;
/**
 * A:10, B:11, … F:15, … Z:35
 */
const [N, B] = ip.trim().split(" ");
const nArr = N.trim().split("");

op = parseInt(N, B);

console.log(op);

// for (let i = 0; i < nArr.length; i++) {
//   if (nArr[i].charCodeAt(0) >= 65 && nArr[i].charCodeAt(0) <= 90) {
//     op += (nArr[i].charCodeAt(0) - 55) * Math.pow(B, len - i);
//   } else {
//     op += nArr[i] * Math.pow(B, len - i);
//   }
// }
