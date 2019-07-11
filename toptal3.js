// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sorted = [...A].sort();
  let diff = 0;
  let chunkSize = 0;
  let numChunks = 0;
  for (let i = 0; i < A.length; i++) {
    diff += A[i];
    diff -= sorted[i];
    chunkSize++;
    if (diff === 0 && chunkSize > 1) {
      numChunks++;
    }
  }
  return numChunks;
}

// let a = solution([2, 4, 1, 6, 5, 9, 7]);
// a;
// a = solution([4, 3, 2, 6, 1]);
// a;
// a = solution([2, 1, 6, 4, 3, 7]);
// a;
