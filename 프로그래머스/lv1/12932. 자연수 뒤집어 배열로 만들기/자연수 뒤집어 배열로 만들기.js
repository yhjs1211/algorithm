function solution(n) {
    const answer = [];
    const str = String(n);
    const len = str.length;
    
    for(let i=len-1; i>=0; i--){
        answer.push(parseInt(str[i]));
    }
    return answer;
}