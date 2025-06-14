// create the range function

function range(start, end) {
  if (end) {
    let i = 0;
    let arr = [];
    while (start <= end) {
      arr[i] = start;
      i++;
      start++;
    }
    console.log(arr);
  } else {
    return function range(end) {
      let i = 0;
      let arr = [];
      let current = start;
      while (current <= end) {
        arr[i] = current;
        i++;
        current++;
      }
      console.log(arr);
    };
  }
}

const input = [
  ["3", "3"],
  ["3", "8"],
  ["3", "0"],
];
const input2 = ["3", "8", "0", "6"];

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3, 4, 5, 6, 7, 8]
start3(0); // []
start4(6); // [4, 5, 6]

for (let [x, y] of input) {
  range(x, y);
}
