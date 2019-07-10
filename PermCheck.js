// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const C = A.reduce((acc, value, index) => acc ^ value ^ (index + 1), 0);
  return C ? 0 : 1;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// console.log(solution([4, 1, 3, 2]));
// console.log(solution([4, 1, 3]));
// console.log(solution([4, 3, 2]));
// console.log(
//   solution(
//     Array(100000)
//       .fill()
//       .map((_, i) => i + 1)
//   )
// );
// console.log(
//   solution(
//     shuffleArray(
//       Array(100000)
//         .fill()
//         .map((_, i) => i + 1)
//     )
//   )
// );
// const randomNumber = Math.floor(Math.random() * 1000) + 1;
// randomNumber
// console.log(
//   solution(
//     shuffleArray(
//       Array(100000)
//         .fill()
//         .map((_, i) => i + 1)
//     ).filter(i => i !== randomNumber)
//   )
// );
