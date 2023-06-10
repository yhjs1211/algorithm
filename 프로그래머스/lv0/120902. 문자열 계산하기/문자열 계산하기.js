function solution(my_string) {
    let answer = 0;
    let cal=true;
    my_string.split(' ').forEach(v=>{
        if(v=='+'||v=='-'){
            v=='+' ? cal=true : cal=false;
        }else{
            if(cal){
                answer+=Number(v);
            }else{
                answer-=Number(v)
            }
        }
    })
    return answer;
}