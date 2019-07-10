function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const bin = (N >>> 0).toString(2);
  let counter = 0;
  let max = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "0") {
      counter++;
    } else {
      max = Math.max(max, counter);
      counter = 0;
    }
  }
  return max;
}

// console.log(solution(1) === 0)
// console.log(solution(9) === 2)
// console.log(solution(529) === 4)
// console.log(solution(20) === 1)
// console.log(solution(15) === 0)
// console.log(solution(32) === 0)
// console.log(solution(1041) === 5)
// console.log(solution(2147483647) === 0)
