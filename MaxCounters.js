// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const counters = Array(N + 1).fill(0);
  let max = 0;
  let prevmax = 0;
  for (let i = 0; i < A.length; i++) {
    const op = A[i];
    if (op >= 1 && op <= N) {
      counters[op]++;
      max = Math.max(counters[op], max);
      //   max;
    } else if (op === N + 1) {
      if (max !== prevmax) {
        prevmax = max;
        counters.fill(max);
      }
      //   counters
    }
  }
  return counters.splice(1);
}

// let a = solution(5, [3, 4, 4, 6, 1, 4, 4, 6, 6]);
// a;
