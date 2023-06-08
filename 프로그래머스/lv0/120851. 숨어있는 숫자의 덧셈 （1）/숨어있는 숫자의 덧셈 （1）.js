function solution(my_string) {
    let answer = my_string.replace(/[a-z,A-Z]/g,'').split('').reduce((a,b)=>Number(a)+Number(b));
    return answer;
}