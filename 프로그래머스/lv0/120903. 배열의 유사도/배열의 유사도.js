function solution(s1, s2) {
    let answer = 0;
    s1.forEach(v1=>{
        s2.forEach(v2=>{
            if(v1==v2)answer++;
        });
    });
    return answer;
}