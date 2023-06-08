function solution(sides) {
    let answer;
    let bigOne =0;
    let sum=0;
    sides.sort((a,b)=>a-b);
    bigOne=sides[2];
    sum=sides[0]+sides[1];
    return bigOne<sum?answer=1:answer=2;
}