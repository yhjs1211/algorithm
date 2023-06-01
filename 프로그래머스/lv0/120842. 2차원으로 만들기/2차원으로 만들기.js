function solution(num_list, n) {
    let answer = [];
    for(let i=0; i<num_list.length/n; i++){
        let arr=[];
        for(let j=i*n; j<i*n+n; j++){
            arr.push(num_list[j]);
        }
        answer.push(arr);
    }
    return answer;
}