function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_6/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("25083.txt");
let op = "";
op = `         ,r\'\"7
r\`-_   ,\'  ,/
 \\. ". L_r\'
   \`~\\/
      |
      |`;

console.log(op);
