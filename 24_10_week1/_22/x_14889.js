const readInput = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_week1/_22/ip/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const ip = readInput("14889.txt");
let op = "";

const [N, ...synergys] = ip.split("\n").map((v) => v.split(" ").map(Number));
let check = Array(N).fill(false);
let min = Number.MAX_SAFE_INTEGER;

function dfs(L, K) {
  if (L == N / 2) {
    const startTeam = [];
    const linkTeam = [];
    let [sSum, lSum] = [0, 0];
    for (let i = 0; i < N; i++) {
      if (check[i]) startTeam.push(i);
      else linkTeam.push(i);
    }
    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        sSum +=
          synergys[startTeam[i]][startTeam[j]] +
          synergys[startTeam[j]][startTeam[i]];
        lSum +=
          synergys[linkTeam[i]][linkTeam[j]] +
          synergys[linkTeam[j]][linkTeam[i]];
      }
    }
    min = Math.min(min, Math.abs(sSum - lSum));
    return;
  }
  for (let i = K; i < N; i++) {
    check[i] = true;
    dfs(L + 1, i + 1);
    check[i] = false;
  }
}
dfs(0, 0);
console.log(min);
