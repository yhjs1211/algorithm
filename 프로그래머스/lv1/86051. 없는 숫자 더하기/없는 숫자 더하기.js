function solution(numbers) {
    let answer = 0;
    for(let i=0; i<10; i++){
        const len = numbers.length;
        let match = false;
        for(let j=0; j<len; j++){
            if(numbers[j]===i){
                match=true;
                numbers.splice(j,1);
            }
        }
        if(!match)answer+=i;
    }
    return answer;
}