function solution(angle) {
    let answer = angle!=180? (angle>90&&angle<180 ? 3 : (angle==90 ? 2 : (angle<90 && angle>0 ? 1 : 0))) : 4;
    return answer;
}