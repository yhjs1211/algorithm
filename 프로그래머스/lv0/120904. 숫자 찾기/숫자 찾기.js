function solution(num, k) {
    var answer = 0;
    let arr = String(num).split('').map(v=>Number(v));
    if(arr.includes(k)){
        answer=arr.indexOf(k)+1;
    }else{
        answer=-1;
    }
    return answer;
}