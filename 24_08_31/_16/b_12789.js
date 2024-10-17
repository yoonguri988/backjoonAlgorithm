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

const ip = readInput("12789.txt");
let op = "";

let [N, students] = ip.split("\n");
students = students.split(" ").map(Number);
let waitArr = [];
for (let i = 1; i <= N; i++) {
  if (waitArr.length) {
    let wLen = waitArr.length - 1;
    if (waitArr[wLen] == i) {
      waitArr.pop();
    }
  }
  for (let j in students) {
    let stud = students[j];
    if (stud == i) {
      waitArr = [...waitArr, ...students.splice(0, j)];
      students.splice(0, 1);
    }
  }
}
op += !waitArr.length ? "Nice" : "Sad";
console.log(op);
