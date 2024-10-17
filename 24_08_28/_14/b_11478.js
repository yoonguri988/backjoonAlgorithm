function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_28/_14/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("11478.txt");
let op = "";

let dict = {};
for (let i = 1; i <= ip.length; i++) {
  let tmp = ip;
  for (let j = 0; j < ip.length; j++) {
    let str = tmp.slice(j, i);
    if (str != "") dict[str] = 0;
  }
}
op = Object.keys(dict).length;
console.log(op);
