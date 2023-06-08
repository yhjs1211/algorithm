function solution(order) {
    let answer =String(order).split('').map(v=>Number(v)).filter(v=>{if([3,6,9].includes(v))return v;}).length;
    return answer;
}