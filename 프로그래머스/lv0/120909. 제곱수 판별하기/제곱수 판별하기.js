function solution(n) {
    let answer = 0;
    for(let i=1; i<=1000; i++){
        if(n==i**2){
           answer=1;
           break;
         }
        if(n<i**2){
            answer=2;
            break;
        }
    }
    return answer;
}