const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week3/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("12015");

const [[N], arr] = iData.split("\r\n").map((v) => v.split(" ").map(Number));

function binarySearch(left, right, target) {
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (lis[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

let lis = [];

let j = 0;
lis[0] = arr[0];
let i = 1;

while (i < N) {
  if (lis[j] < arr[i]) {
    lis[++j] = arr[i];
  } else {
    let idx = binarySearch(0, j, arr[i]);
    lis[idx] = arr[i];
  }
  i++;
}
// console.log(lis);
console.log(lis.length);
