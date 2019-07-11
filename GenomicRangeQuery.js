// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// fails performance
function solution(S, P, Q) {
  const impact = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  //   let I = [];
  //   for (let i = 0; i < S.length; i++) {
  //     I.push(impact[S[i]]);
  //   }
  let result = [];
  for (let j = 0; j < P.length; j++) {
    const p = P[j];
    const q = Q[j];
    let min = Math.min(impact[S[p]], impact[S[q]]);
    for (let i = p; i <= q; i++) {
      const imp = impact[S[i]];
      min = Math.min(min, imp);
    }
    result.push(min);
  }
  return result;
}

// let a = solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);
// a; // [2,4,1]
