function solution(s) {
    let obj={};
    s.split('').forEach(v=>{
        if(obj[v]==undefined){
            obj[v]=1;
        }else{
            obj[v]++;
        }
    });
    let answer=[];
    Object.keys(obj).forEach(v=>{
        if(obj[v]==1)answer.push(v);
    })
    answer=answer.sort().join('');
    return answer;
}