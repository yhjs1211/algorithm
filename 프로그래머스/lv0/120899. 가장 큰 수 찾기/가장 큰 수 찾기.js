function solution(array) {
    let answer = Array.from({length:2});
    array.forEach((v,idx)=>{
        if(answer[0]){
            if(v>answer[0]){
                answer[0]=v;
                answer[1]=idx;    
            }
        }else{
            answer[0]=v;
            answer[1]=idx;
        }
    })
    return answer;
}