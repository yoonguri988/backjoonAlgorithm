function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_24/_8/ip/" + addr;

  try {
    const data = fs.readFileSync(addr).toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("1193.txt");
let op = "op";

const X = parseInt(ip.trim());
let [limit, n] = [1, 1];
while (limit < X) {
  limit += n + 1;
  n++;
}

const a = n - (limit - X);
if (n % 2 == 0) console.log(`${a}/${n - a + 1}`);
else console.log(`${n - a + 1}/${a}`);
