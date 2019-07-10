function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = Array(A.length).fill();
  for (let i = 0; i < A.length; i++) {
    result[(i + K) % A.length] = A[i];
  }
  return result;
}
