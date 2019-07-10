function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unpaired = 0;
  for (let value of A) {
    unpaired ^= value;
  }
  return unpaired;
}

// console.log("1", solution([9,3,9,3,9,7,9]) === 7)
// console.log("2", solution([9,3,9,3,9,7,9,11,11]) === 7)
// console.log("3", solution([9,3,9,3,9,7,9,7,7,7,11]) === 11)
