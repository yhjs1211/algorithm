function solution(phone_number) {
    let answer = '';
    const len = phone_number.length;
    for(let i=0; i<len; i++){
        i < len-4
            ? answer+='*'
            : answer+=phone_number[i]
    }
    return answer;
}