function solution(emergency) {
    let answer=[];
    for(let i=0; i<emergency.length; i++){
        let emer = 0;
        for(let j=0; j<emergency.length; j++){
            if(i!=j){
                if(emergency[i]>emergency[j])emer++;
            }
        }
        let sequence = emergency.length-emer;
        answer[i]=sequence;
    }
    return answer;
}