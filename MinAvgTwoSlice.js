// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = (A[0] + A[1]) / 2;
  let minIndex = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i + 1] === undefined) continue;
    let sum2 = A[i] + A[i + 1];
    let avg = sum2 / 2;
    if (avg < min) {
      min = avg;
      minIndex = i;
    }
    if (minIndex === i) continue;
    if (A[i + 2] === undefined) continue;
    avg = (sum2 + A[i + 2]) / 3;
    if (avg < min) {
      min = avg;
      minIndex = i;
    }
  }
  return minIndex;
}

let a;
// a = solution([4, 2, 2, 5, 1, 5, 8]);
a; // 1
// a = solution([-3, -5, -8, -4, -10]);
a; // 2
// a = solution([-10000, 10000]);
a; // 0
// a = solution([10, -1, -10, -100]);
a; // 2
