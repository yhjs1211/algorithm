function solution(n) {
    return String(n).split('').map(v=>Number(v)).reduce((a,b)=>a+b);
}