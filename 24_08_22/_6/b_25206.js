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

const ip = readInput("25206.txt");
let op = 0;
/**
 * 학점 * 과목평점 합 / 학점의 총합
 */
const reports = ip.trim().split("\n");
const dict = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let credits = 0;
let score = 0;

for (let rep of reports) {
  const [subject, credit, grade] = rep.trim().split(" ");
  if (grade == "P") continue;
  credits += credit * 1;
  score += credit * dict[grade];
}
op = Math.round((score / credits) * 10000) / 10000;
console.log(op);
