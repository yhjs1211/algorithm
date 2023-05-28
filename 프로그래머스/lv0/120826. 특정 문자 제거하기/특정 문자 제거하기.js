function solution(my_string, letter) {
    let answer = my_string.split('').filter(v=>v!=letter).join('');
    return answer;
}