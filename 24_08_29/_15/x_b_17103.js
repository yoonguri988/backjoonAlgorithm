let readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_08_29/_15/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = readInput("17103.txt");
let op = "";
/**
 * 골드바흐 파티션
 * : 2보다 큰 짝수는 두 소수의 합
 */
let [T, ...tcs] = ip.split("\n");
let prime = Array(Math.max(...tcs) + 1).fill(true);
[prime[0], prime[1]] = [false, false];
for (let i = 2; i <= Math.sqrt(prime.length); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= prime.length; j += i) {
      prime[j] = false;
    }
  }
}
let dict = {};
prime.forEach((v, i) => {
  if (v) dict[i] = v;
});

for (let tc of tcs) {
  let cnt = 0;
  for (let i = 2; i <= Math.round(tc / 2); i++) {
    if (dict[i] && dict[tc - i]) cnt++;
  }
  op += cnt + "\n";
}
console.log(op);
