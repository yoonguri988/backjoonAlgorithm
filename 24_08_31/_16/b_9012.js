const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_31/_16/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("9012.txt");
let op = "";

let [T, ...parStrs] = ip.split("\r\n");
for (let i = 0; i < T; i++) {
  let parStr = parStrs[i].split("");
  let arr = [];
  for (let ps of parStr) {
    if (!arr.length) arr.push(ps);
    else if (arr[0] + ps == "()") arr.pop();
    else if (ps == "(") arr.push(ps);
  }
  op += (arr.length ? "NO" : "YES") + "\n";
}
console.log(op);
