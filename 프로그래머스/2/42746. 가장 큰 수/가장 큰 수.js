function solution(numbers) {
    let answer = numbers.map((n)=>String(n)).sort((a,b)=>(b+a)-(a+b)).join('');
    
    return answer[0] === "0" ? "0" : answer;
}