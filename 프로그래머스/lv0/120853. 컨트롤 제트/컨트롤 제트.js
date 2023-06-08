function solution(s) {
    let arr = s.split(' ');
    let tmp;
    let answer=0;
    arr.forEach(v=>{
        if(v=='Z'){
            answer-=tmp;
        }else{
            v=Number(v);
            answer+=v;
            tmp=v;
        }
    })
    return answer;
}