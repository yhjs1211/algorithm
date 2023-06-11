function solution(t, p) {
    let answer = 0;
    let lengthOfP = p.length;
    for(let i=0; i<=t.length-lengthOfP; i++){
        let num='';
        for(let j=i; j<i+lengthOfP; j++){
            num+=t[j];
        }
        if(Number(num)<=Number(p))answer++;
    }
    return answer;
}