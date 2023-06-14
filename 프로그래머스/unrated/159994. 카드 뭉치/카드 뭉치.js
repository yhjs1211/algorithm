function solution(cards1, cards2, goal) {
    let answer = '';
    let tmp='';
    for(let i=0; i<goal.length; i++){
        let str = goal[i];
        if(cards1[0]==str){
            tmp+=cards1.shift();
        }else if(cards2[0]==str){
            tmp+=cards2.shift();
        }else{
            answer='No';
            break;
        }
    }
    if(tmp==goal.join(''))answer='Yes';
    return answer;
}