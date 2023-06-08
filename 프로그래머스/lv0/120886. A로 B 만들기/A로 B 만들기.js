function solution(before, after) {
    let be = before.split('');
    let answer;
    for(let i=0; i<be.length; i++){
        if(after.includes(be[i])){
            after=after.replace(be[i],'');
        }else{
            answer=0;
            break;
        }
    }
    if(after=='')answer=1;
    return answer;
}