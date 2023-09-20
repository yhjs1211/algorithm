function solution(arr) {
    let answer = [];
    const min = Math.min(...arr);
    const len = arr.length;
    len === 1
        ? answer.push(-1)
        : arr.forEach(v=>{
        if(v!==min)answer.push(v)
    })
    return answer;
}