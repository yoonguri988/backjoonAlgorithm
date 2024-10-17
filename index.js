// example.txt -> /dev/stdin
var input = require("fs").readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// readFile의 동기버전 -> readFileSync()
// try {
//   const data = fs.readFileSync("example.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

function readInput(addr) {
  const fs = require("fs");
  if (process.platform === "linux") {
    addr = "/dev/stdin";
  } else {
    addr = "./24_08_21/_3/ip/" + addr;
  }
  try {
    const data = fs.readFileSync(addr, "utf-8").toString();
    return data;
  } catch (err) {
    console.error(err);
  }
}
