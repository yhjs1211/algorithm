function solution(arr)
{
    const answer = [];
    let beforeNum = 10;
    
    arr.forEach(n=>{
        if(beforeNum!==n){
            answer.push(n);
            beforeNum=n;
        }
    })
    
    
    return answer;
}