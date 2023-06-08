function solution(array, n) {
    let answer = array[0];
    for(let i=1; i<array.length; i++){
        let num1 = Math.abs(n-array[i]);
        let num2 = Math.abs(n-answer);

        if(num1<num2){
            answer=array[i];
        }else if(num1==num2){
            array[i]<answer?answer=array[i]:null;
        }
    }
    
    return answer;
}