// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, L, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  let u = [];
  let un = 0;
  let l = [];
  let ln = 0;
  for (let i = 0; i < C.length; i++) {
    switch (C[i]) {
      case 0:
        u.push(0);
        l.push(0);
        break;
      case 1:
        if (un + 1 <= U) {
          u.push(1);
          un += 1;
          l.push(0);
        } else if (ln + 1 <= L) {
          l.push(1);
          ln += 1;
          u.push(0);
        } else {
          return "IMPOSSIBLE";
        }
        break;
      case 2:
        u.push(1);
        un += 1;
        l.push(1);
        ln += 1;
        break;
      default:
        break;
    }
  }
  if (un === U && ln === L) return u.join("") + "," + l.join("");
  if (ln === U && un === L) return l.join("") + "," + u.join("");
  let diff = Math.abs(un - U);
  for (let i = 0; i < C.length; i++) {
    if (C[i] === 1) {
      u[i] = Number(u[i]) ? 0 : 1;
      l[i] = Number(l[i]) ? 0 : 1;
      diff--;
    }
    if (!diff) {
      break;
    }
  }
  if (!diff) {
    return u.join("") + "," + l.join("");
  }
  return "IMPOSSIBLE";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomNumber(min, max) {
  return Math.random() * (+max - +min) + +min;
}

// let top = shuffleArray(
//   Array(5)
//     .fill()
//     .map((_, i) => Math.round(randomNumber(0, 1)))
// );

// let bot = shuffleArray(
//   Array(5)
//     .fill()
//     .map((_, i) => Math.round(randomNumber(0, 1)))
// );

// top = [0, 0, 1, 1, 1];
// bot = [1, 1, 1, 0, 1];

// top = [1,1,0,0,1]
// bot = [1,0,1,0,0]

// top = [0, 0, 0, 1, 1];
// bot = [0, 1, 0, 0, 1];

// let c = top.map((v, i) => v + bot[i]);
// c;
// let u = top.reduce((acc, val) => acc + val, 0);
// u;
// let l = bot.reduce((acc, val) => acc + val, 0);
// l;
// console.log(solution(u, l, c));
// console.log(solution(2, 3, [0, 0, 1, 1, 2]));
