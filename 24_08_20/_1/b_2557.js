// backjoon fsAddress "/dev/stdin"
const input = require("fs").readFile("ip/ip_2557.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
