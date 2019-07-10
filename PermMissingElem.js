function solution(A) {
  A = A.sort();
  A.push(0);
  return A.reduce((acc, value, index) => {
    return acc ^ (index + 1) ^ value;
  }, 0);
}

// console.log(solution([2,3,1,5]))
// console.log(solution([2,3,1,5,6]))
// console.log(solution([2,3,1,5,4]))
