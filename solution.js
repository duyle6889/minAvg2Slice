// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let n = A.length;
    if (n < 2) {
        return 0;
    }
    let r = 0;
    let m = 100000;
    for (let i = 0; i < n - 1; i++) {
        let t = (A[i] + A[i + 1]) / 2;
        if (t < m) {
            m = t;
            r = i;
        }
    }

    for (let i = 0; i < n - 2; i++) {
        let t = (A[i] + A[i + 1] + A[i + 2]) / 3;
        if (t < m) {
        m = t;
        r = i;
        }
    }
  return r;
}
