function solution(numbers, direction) {
    if(direction=='right'){
        let tmp=numbers[numbers.length-1];
        for(let i=numbers.length-2; i>=0; i--){
            numbers[i+1]=numbers[i];
        }
        numbers[0]=tmp;
    }else{
        let tmp=numbers[0];
        for(let i=0; i<numbers.length-1; i++){
            numbers[i]=numbers[i+1];
        }
        numbers[numbers.length-1]=tmp;
    }
    return numbers;
}