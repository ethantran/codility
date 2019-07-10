// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let L = 0;
    let R = 0;
    let LA = Array(A.length);
    let RA = Array(A.length);
    for (let i = 0; i < A.length; i++) {
        L += (A[i-1] || 0);
        R += -A[A.length-i-1];
        LA[i] = L;
        RA[A.length-i-1] = R;
    }
    // console.log(LA)
    // console.log(RA)
    let result = Math.abs(LA[A.length-1]+RA[A.length-1]);
    for (let i = 1; i < A.length; i++) {
        result = Math.min(Math.abs(LA[i]+RA[i]), result)
    }
    return result
}


console.log(solution([3,1,2,4,3]))
console.log(solution([-1000, 1000]))
console.log(solution([-2, -3, -4, -1]))