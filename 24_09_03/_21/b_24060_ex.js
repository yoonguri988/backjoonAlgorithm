const fs = require("fs");

const input = fs
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

let k = input[0][1];
let answer = null;

input.shift();

let array = input[0];

function mergeSort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let tmp = [];
  let i = p,
    j = q + 1,
    t = 0;

  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }

  while (i <= q) {
    tmp[t++] = A[i++];
  }

  while (j <= r) {
    tmp[t++] = A[j++];
  }

  i = p;
  t = 0;
  while (i <= r) {
    if (--k == 0) {
      answer = tmp[t];
    }
    A[i++] = tmp[t++];
  }
}

mergeSort(array, 0, array.length - 1);

if (k <= 0) console.log(answer);
if (k > 0) console.log(-1);
