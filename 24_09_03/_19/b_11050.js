/** https://www.acmicpc.net/problem/11050 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_19/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("11050");
let op = "";
/**
 * @todo 1sec 256MB
 * @description 이항계수 [11050]
 */
const [N, K] = ip.split(" ").map(Number);
const max = Math.max(K, N - K);

let top = 1,
  bottom = 1;
if (max == K) {
  for (let i = N; i > K; i--) top *= i;
  for (let i = N - K; i > 0; i--) bottom *= i;
} else {
  for (let i = N; i > N - K; i--) top *= i;
  for (let i = K; i > 0; i--) bottom *= i;
}
console.log(`${top / bottom}`);
