function solution(spell, dic) {
    let answer = 0;
    for(let i=0; i<dic.length; i++){
        let stArr = dic[i].split('');
        if(spell.length==stArr.length){
            for(let j=0; j<stArr.length; j++){
                if(stArr.includes(spell[j])){
                    dic[i]=dic[i].replace(spell[j],'');    
                }
                
            }
            if(dic[i]==''){
                answer=1;
                break;
            }
        }
    }
    if(answer!=1)answer=2;
    return answer;
}