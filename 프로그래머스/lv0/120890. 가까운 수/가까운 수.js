function solution(array, n) {
    let answer = array[0];
    for(let i=1; i<array.length; i++){
        let num1 = n-array[i]<0 ? (n-array[i])*-1 : n-array[i];
        let num2 = n-answer<0 ? (n-answer)*-1 : n-answer;

        if(num1<num2){
            answer=array[i];
        }else if(num1==num2){
            array[i]<answer?answer=array[i]:null;
        }
    }
    
    return answer;
}