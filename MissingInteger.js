// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 1;
  let counters = Array(100002);
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    counters[value] = (counters[value] || 0) + 1;
    if (value === result) {
      for (let v2 = value + 1; v2 < counters.length; v2++) {
        const v2count = counters[v2];
        if (!v2count) {
          result = v2;
          break;
        }
      }
    }
  }
  //   console.log(counters[100000]);
  return result;
}

// let a = solution([1, 3, 6, 4, 1, 2]);
// a;
// a = solution([1, 2, 3]);
// a;
// a = solution([-1, -3]);
// a;

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// const largeArray = Array(100000)
//   .fill()
//   .map((_, i) => i + 1);
// console.log(largeArray[99999]);
// a = solution(shuffleArray(largeArray));
// a;
