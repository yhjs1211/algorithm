function solution(n){
    let answer = 0;
    const str = String(n);
    const length = str.length;
    for(let i=0; i<length; i++){
        answer+=parseInt(str[i]);
    }
    
    return answer;
}