function solution(my_string) {
    let answer='';
    my_string.split('').forEach(v=>{
        if(!answer.includes(v))answer+=v;
    })
    return answer;
}