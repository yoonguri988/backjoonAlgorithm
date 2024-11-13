const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = "./24_11_week2/25/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const iData = readText("16139.txt");
let ans = "";
let [str, q, ...alrArr] = iData.split("\r\n");

const MAX_LEN = 200001;
const dp = Array.from(Array(26), () => Array(MAX_LEN).fill(0));
for (let i = 1; i <= str.length; i++) {
  let alpha = str[i - 1].charCodeAt() - 97;
  dp[alpha][i]++;
  for (let j = 0; j < 26; j++) {
    dp[j][i] += dp[j][i - 1];
  }
}

for (let i = 0; i < q; i++) {
  let [a, l, r] = alrArr[i].split(" ").map((v) => (!isNaN(v) ? Number(v) : v));
  a = a.charCodeAt() - 97;
  ans += `${dp[a][r + 1] - dp[a][l]}\n`;
}
console.log(ans);
