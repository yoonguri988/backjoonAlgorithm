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

const ip = readInput("7785.txt");
let op = "";

let [N, ...reports] = ip.split("\r\n");
let company = {};

for (let repo of reports) {
  repo = repo.split(" ");
  if (repo[1] == "enter") company[repo[0]] = 0;
  else if (repo[1] == "leave") {
    company[repo[0]] = -1;
  }
}
let arr = Object.entries(company)
  .filter((v) => v[1] == 0)
  .sort((a, b) => {
    if (a[0] > b[0]) return -1;
    else if (a[0] < b[0]) return 1;
    else return 0;
  });
for (let a of arr) {
  op += a[0] + "\n";
}
console.log(op);
