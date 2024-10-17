function readInput(addr) {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
}
const ip = readInput("./24_08_20/_2/ip/ip_2884.txt");
let op;

let alarm = ip.split(" ");

if (alarm[1] >= 45) {
  alarm[1] -= 45;
} else {
  alarm[0] -= 1;
  alarm[1] = parseInt(alarm[1]) + 15;
  if (alarm[0] < 0) {
    alarm[0] = 23;
  }
}

op = alarm.join(" ");
console.log(op);
