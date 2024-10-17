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

const ip = readInput("1316.txt");
let op = 0;

const [N, ...words] = ip.trim().split("\r\n");
for (let wd of words) {
  let chkWord = [];
  let erCnt = 0;
  for (let i in wd.split("")) {
    if (i > 0) {
      if (wd[i - 1] == wd[i]) continue;
    }

    if (!chkWord.includes(wd[i])) chkWord.push(wd[i]);
    else erCnt++;
  }
  if (erCnt == 0) op++;
}
console.log(op);
