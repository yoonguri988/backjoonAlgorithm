function inputTextFile(addr) {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_10_not-resolve/inputTextFile/" + addr;
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const inputData = inputTextFile("14889.txt");
let [N, ...ablities] = inputData.split("\r\n");
N = Number(N);
ablities = ablities.map((v) => {
  return v.split(" ").map(Number);
});

let visited = Array(N).fill(false);
let min = Number.MAX_SAFE_INTEGER;

function dfs(n, v) {
  if (n == N / 2) {
    let [start, link] = [[], []];
    let [sScore, lScore] = [0, 0];

    for (let i = 0; i < N; i++) {
      if (visited[i]) start.push(i);
      else link.push(i);
    }

    for (let i = 0; i < N / 2; i++) {
      for (let j = i + 1; j < N / 2; j++) {
        sScore += ablities[start[i]][start[j]] + ablities[start[j]][start[i]];
        lScore += ablities[link[i]][link[j]] + ablities[link[j]][link[i]];
      }
    }

    min = Math.min(min, Math.abs(sScore - lScore));
    return;
  }

  for (let i = v; i < N; i++) {
    visited[i] = true;
    dfs(n + 1, i + 1);
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(`${min}`);
