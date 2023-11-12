function solution(n, lost, reserve) {
    let answer = 0;
    
    lost.forEach((l)=>{
        if(reserve.includes(l)){
            lost = lost.filter((n)=>n!==l);
            reserve = reserve.filter((n)=>n!==l);
        }
    })
    
    for(let i=1; i<=n; i++){
        answer++;
        if(lost.includes(i)){
            if(reserve.includes(i-1)){
            reserve = reserve.filter((r)=>r!==i-1);
            }else if(reserve.includes(i+1)){
                reserve = reserve.filter((r)=>r!==i+1);
            }else{
                answer--;
            }
        }
    }
    
    return answer;
}

/*
5, [4,5], [3,4] = 4

5, [2,3], [3,4] = 4

*/