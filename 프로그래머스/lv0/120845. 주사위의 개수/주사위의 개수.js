function solution(box, n) {
    let answer=1;
    
    box.forEach(v=>{
        answer*=Math.floor(v/n);
    });
    return answer;
}