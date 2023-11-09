function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>b-a);
    let idx = 0;
    
    while(citations[idx]>idx+1){
        answer++;
        idx++;
    }
    
    return answer;
}