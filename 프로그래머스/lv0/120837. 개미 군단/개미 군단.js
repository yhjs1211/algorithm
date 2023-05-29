function solution(hp) {
    let ants = [5,3,1];

    let answer = 0;
    ants.forEach(v=>{
        let num = Math.floor(hp/v);
        hp-=num*v;
        answer+=num;
    })

    return answer;
}