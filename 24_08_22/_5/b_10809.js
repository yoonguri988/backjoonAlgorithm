function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_22/_5/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("10809.txt");
let op;

let alpha = "";
for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  alpha += String.fromCharCode(i);
}
let dict = {};
for (let a of alpha.split("")) {
  dict[a] = -1;
}
const S = ip.trim().split("");
for (let i in S) {
  if (dict[S[i]] == -1) dict[S[i]] = i * 1;
}
op = Object.values(dict).join(" ");
console.log(op);
