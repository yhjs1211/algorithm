function solution(a, b) {
    let answer;
    a > b 
        ? answer = sum(b,a)
        : a < b
            ? answer = sum(a,b)
            : answer=a;
    return answer;
}

function sum(num1,num2){
    let cnt=0;
    for(let i=num1; i<=num2; i++){
        cnt+=i;
    }
    return cnt;
}