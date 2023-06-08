function solution(my_string) {
    let answer = '';
    let arr=['a','e','i','o','u'];
    my_string.split('').forEach(v=>arr.includes(v)?null:answer+=v);
    return answer;
}