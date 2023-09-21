function solution(n, m, section) {
    let answer = 0;
    let rangeMin;
    let rangeMax;
    
    section.forEach((v)=>{
        if(rangeMin && rangeMax){
            if( rangeMax < v) {
                rangeMin = v;
                rangeMax = v+m-1;
                
                if(rangeMax>n){
                    const sub = n-rangeMax;
                    rangeMin+=sub;
                    rangeMax+=sub;
                }
                answer++;
            }
        }else{
            rangeMin = v;
            rangeMax = v+m-1;
            answer++;
        }
    })
    return answer;
}