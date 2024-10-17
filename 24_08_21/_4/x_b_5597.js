function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_4/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("5597.txt");
let op;

const chkStud = ip
  .trim()
  .split("\n")
  .map((n) => parseInt(n));
let stud = Array(30).fill(0);
stud.forEach((v, i, arr) => {
  arr[i] = i + 1;
});

for (let sn of chkStud) {
  stud[stud.indexOf(sn)] = 0;
}

op = stud
  .filter((v) => v != 0)
  .splice(0, 2)
  .join("\n");
console.log(op);
