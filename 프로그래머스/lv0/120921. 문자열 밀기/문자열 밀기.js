function solution(A, B) {
    let answer = 0;
    if(A==B){
        answer=0;
    }else{
        let arr = A.split('');
        for(let i=0; i<A.length; i++){
            arr.unshift(arr.pop());
            let str = arr.join('');
            if(str==B){
                answer=i+1;
                break;
            }
        }
        if(arr.join('')!=B)answer=-1;
    }
    return answer;
}