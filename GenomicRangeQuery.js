// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  const countA = [];
  const countC = [];
  const countG = [];
  const countT = [];
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "A":
        countA.push((countA[i - 1] || 0) + 1);
        countC.push(countC[i - 1] || 0);
        countG.push(countG[i - 1] || 0);
        countT.push(countT[i - 1] || 0);
        break;
      case "C":
        countC.push((countC[i - 1] || 0) + 1);
        countA.push(countA[i - 1] || 0);
        countG.push(countG[i - 1] || 0);
        countT.push(countT[i - 1] || 0);
        break;
      case "G":
        countG.push((countG[i - 1] || 0) + 1);
        countC.push(countC[i - 1] || 0);
        countA.push(countA[i - 1] || 0);
        countT.push(countT[i - 1] || 0);
        break;
      default:
        countT.push((countT[i - 1] || 0) + 1);
        countC.push(countC[i - 1] || 0);
        countG.push(countG[i - 1] || 0);
        countA.push(countA[i - 1] || 0);
        break;
    }
  }
  const result = [];
  for (let j = 0; j < P.length; j++) {
    const indexp = P[j];
    const indexq = Q[j];
    if ((countA[indexp - 1] || 0) - countA[indexq] !== 0) {
      result.push(1);
    } else if ((countC[indexp - 1] || 0) - countC[indexq] !== 0) {
      result.push(2);
    } else if ((countG[indexp - 1] || 0) - countG[indexq] !== 0) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
}

// let a;
// a = solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);
// a; // [2,4,1]
// a = solution("A", [0], [0]);
// a; // 1
// a = solution("C", [0], [0]);
// a; // 2
// a = solution("G", [0], [0]);
// a; // 3
// a = solution("T", [0], [0]);
// a; // 4
// a = solution("AC", [0, 0, 1], [0, 1, 1]);
// a; // [1,1,2]
