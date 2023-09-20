function solution(arr) {
    let answer = [];
    let min;
    let minIdx;
    if(arr.length==1){
        answer.push(-1);
    }else{
        arr.forEach((v,idx)=>{
            if(minIdx){
                if(arr[minIdx]>v){
                    minIdx=idx;     
                }
            }else{
                minIdx=idx;
            }
        });
        arr.forEach((v,idx)=>{
        idx!==minIdx
            ? answer.push(v)
            : null
        })    
    }
    return answer;
}