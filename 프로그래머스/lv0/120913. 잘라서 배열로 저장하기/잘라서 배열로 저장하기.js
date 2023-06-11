function solution(my_str, n) {
    let answer = [];
    for(let i=0; i<Math.ceil(my_str.length/n); i++){
        let str='';
        for(let j=i*n; j<(i*n)+n; j++){
            if(my_str[j]!=undefined){
                str+=my_str[j];
            }else{
                break;
            }
        }
        answer.push(str);
    }
    return answer;
}