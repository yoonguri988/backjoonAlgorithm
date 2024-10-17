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

const ip = readInput("1620.txt");
let op = "";

let [NMs, ...poketmons] = ip.split("\r\n");
let [N, M] = NMs.split(" ").map(Number);
let inputPoketmon = poketmons.splice(0, N);

let dict = {};
for (let i in inputPoketmon) {
  dict[inputPoketmon[i]] = i * 1 + 1;
}

let keys = Object.keys(dict);
for (let i in poketmons) {
  let chk = poketmons[i];
  if (dict[chk]) op += dict[chk] + "\n";
  else if (keys[chk - 1]) op += keys[chk - 1] + "\n";
}
console.log(op);
