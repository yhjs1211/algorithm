function solution(my_string) {
    let answer=0;
    my_string.split(/[a-z,A-Z]/).forEach(v=>{
        if(v!='')answer+=Number(v);
    })
    return answer;
}