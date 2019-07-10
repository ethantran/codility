// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sum = (X * (X + 1)) / 2;
  //   sum;
  const counts = Array(100001).fill(0);
  let a = 0;
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    // value
    counts[value]++;
    if (counts[value] === 1) {
      a += value;
    }
    if (a === sum) {
      return i;
    }
  }
  return -1;
}

// let a = solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
// a
// a = solution(5, [1, 3, 1, 4, 2, 3, 6, 4]);
// a
// a = solution(5, [1, 3, 1, 4, 2, 3, 56, 4]);
// a
// a = solution(1, [1]);
// a
// a = solution(
//   100000,
//   Array(100000)
//     .fill()
//     .map((_, i) => i + 1)
// );
// a;
