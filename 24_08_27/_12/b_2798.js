function readInput(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_27/_12/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const ip = readInput("2798.txt");
let op = "";

const [NMs, cards] = ip.split("\n");
const [N, M] = NMs.split(" ").map(Number);
const card = cards.split(" ").map(Number);

if (N >= 3 && N <= 100 && M >= 10 && M <= 300000) {
  let sumArr = [M];
  for (let i = 0; i < card.length - 2; i++) {
    for (let j = i + 1; j < card.length - 1; j++) {
      for (let k = j + 1; k < card.length; k++) {
        let sum = card[i] + card[j] + card[k];
        if (sum <= M) sumArr.push(sum);
      }
    }
  }
  sumArr.sort((a, b) => a - b);
  op = sumArr[sumArr.length - 2];
  console.log(op);
}
