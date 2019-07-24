// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let i = A;
  let j = B;
  let count = 0;
  while (i <= j) {
    let skipj = i === j;
    let result = i % K;
    if (result === 0) {
      count++;
      i += K;
    } else if (i < K) {
      i += Math.abs(i - K);
    } else {
      i += result;
    }
    if (skipj) continue;
    result = j % K;
    if (result === 0) {
      count++;
      j -= K;
    } else if (j < K) {
      j -= Math.abs(j - K);
    } else {
      j -= result;
    }
  }
  return count;
}

let a;
a = solution(6, 11, 2);
a; // 3
a = solution(5, 11, 2);
a; // 3
a = solution(11, 345, 17);
a; // 20
a = solution(0, 0, 11);
a; // 1
