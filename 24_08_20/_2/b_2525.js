function readInput(addr) {
  try {
    const fs = require("fs");
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("./24_08_20/_2/ip/ip_2525.txt");
let op;

const nowTime = ip.split("\r\n")[0].split(" ");
const cookTime = parseInt(ip.split("\n")[1]); //0 <= C <= 1000

const HH = Math.floor((parseInt(nowTime[1]) + cookTime) / 60);
const mm = (parseInt(nowTime[1]) + cookTime) % 60;

nowTime[0] = parseInt(nowTime[0]) + HH;
if (nowTime[0] >= 24) nowTime[0] -= 24;
nowTime[1] = mm;

op = nowTime.join(" ");
console.log(op);
