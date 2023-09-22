function solution(number, limit, power) {
    let answer = 0;
    for(let j=1; j<=number; j++){
        let divArr = [];
        for(let i=1; i<=Math.sqrt(j); i++){
            if(j%i===0){
                if(i != j/i){
                    divArr.push(i);
                    divArr.push(j/i);
                }else{
                    divArr.push(i);
                }
            }
        }
        const len = divArr.length;
        len > limit ? answer+=power : answer+=len;
        divArr=[];
    }
    
    return answer;
}