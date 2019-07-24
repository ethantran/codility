// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let j = B;
  let count = 0;
  while (j > A) {
    let result;
    let div = j / K;
    if (Number.isInteger(div)) {
      count += div;
      j -= div * K;
    } else {
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
  }
  if (A === B) {
    if (A === 0 || A % K === 0) {
      count++;
    }
    return count;
  }
  if (A > 0 && B > 0) {
    return count - solution(0, A - 1, K) + 1;
  }
  if (A === 0) {
    return count + 1;
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
a = solution(1, 1, 11);
a; // 0
a = solution(10, 10, 5);
a; // 1
a = solution(10, 10, 7);
a; // 0
a = solution(10, 10, 20);
a; // 0
a = solution(0, 14, 2);
a; // 8
