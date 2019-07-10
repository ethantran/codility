function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  const Z = Y - X;
  const R = Z % D;
  let result = (Z - R) / D;
  if (R > 0) {
    result++;
  }
  return result;
}

// console.log(solution(10, 85, 30) === 3)
// console.log(solution(1, 5, 2) === 2)
