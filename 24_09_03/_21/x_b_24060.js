/** https://www.acmicpc.net/problem/24060 */
const input = (addr) => {
  const fs = require("fs");
  if (process.platform == "linux") addr = "/dev/stdin";
  else addr = "./24_09_03/_21/ip/" + addr + ".txt";
  try {
    const data = fs.readFileSync(addr, "utf-8").toString().trim();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const ip = input("24060");
let op = "";
/**
 * @todo 1sec 512MB
 * @description 알고리즘 수업 - 병합 정렬 1 [24060]
 * merge sort에서 k번째 저장되는 수 구하기
 */

let [[N, K], nums] = ip.split("\n").map((v) => v.split(" ").map(Number));

let cnt = 0;
let target;

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    cnt++;
    if (cnt == K) target = result[result.length - 1];
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    cnt++;
    if (cnt == K) target = result[result.length - 1];
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    cnt++;
    if (cnt == K) target = result[result.length - 1];
  }
  return result;
};
const mergeSort = (arr) => {
  if (arr.length == 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

mergeSort(nums);
if (!target) target = -1;
console.log(target);
