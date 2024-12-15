const readText = (addr) => {
  const fs = require("fs");
  if (process.platform === "linux") addr = "/dev/stdin";
  else addr = `./24_12_week2/ip/${addr}.txt`;

  try {
    const data = fs.readFileSync(addr, "utf-8");
    return data.toString().trim();
  } catch (e) {
    console.error(e.message);
    return;
  }
};

const iData = readText("6549");
/**
 * 6549 히스토그램에서 가장 큰 직사각형
 * 직사각형 N의 개수
 * * 1 ≤ n ≤ 100,000
 * N개의 히스토그램 정수
 * * h = 0 ≤ h ≤ 1,000,000,000
 * 입력의 마지막은 0
 */
const INPUTS = iData.split("\r\n");

//[left, right] 구간에서 찾아낼 수 있는 가장 큰 직사각형의 넓이를 반환
const getResult = (heightList, left, right) => {
  //기저 사례: 직사각형이 하나밖에 없는 경우
  if (left === right) {
    return heightList[left];
  }

  //[left, mid], [mid+1, right]의 두 구간으로 문제를 분할
  const mid = Math.floor((left + right) / 2);
  //양쪽 부분 문제를 재귀호출 후 더 큰 직사각형의 넓이를 저장
  let result = Math.max(
    getResult(heightList, left, mid),
    getResult(heightList, mid + 1, right)
  );
  //두 부분에 모두 걸쳐있는 사각형 중 가장 큰 것 탐색
  let low = mid,
    high = mid + 1;
  let height = Math.min(heightList[low], heightList[high]);
  //[mid, mid+1]만 포함하는 너비 2인 사각형을 고려
  result = Math.max(result, height * 2);

  //사각형이 입력 전체를 덮을 때까지 확장
  while (low > left || high < right) {
    //항상 높이가 더 높은 쪽으로 확장
    if (
      high < right &&
      (low === left || heightList[low - 1] < heightList[high + 1])
    ) {
      high++;
      height = Math.min(height, heightList[high]);
    } else {
      low--;
      height = Math.min(height, heightList[low]);
    }
    //확장 후 사각형의 넓이
    result = Math.max(result, height * (high - low + 1));
  }
  return result;
};

const strToNumArr = (str) =>
  str.split(" ").map((numString) => Number(numString));

for (let inputStr of INPUTS) {
  if (inputStr === "0") break;
  const [N, ...H_ARR] = strToNumArr(inputStr);
  console.log(getResult(H_ARR, 0, N - 1));
}
