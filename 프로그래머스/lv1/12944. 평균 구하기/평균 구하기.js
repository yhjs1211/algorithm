function solution(arr) {
    let cnt=0;
    arr.forEach((v)=>{
        cnt+=v;
    })
    const answer = cnt/arr.length;
    return answer;
}