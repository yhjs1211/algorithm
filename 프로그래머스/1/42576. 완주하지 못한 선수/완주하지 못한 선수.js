function solution(participant, completion) {
    const finish = {};
    
    completion.forEach((name)=>{
        if(finish[name]){
            finish[name]=finish[name]+1;
        }else{
            finish[name]=1;
        }
    });
    
    for(let i=0; i<participant.length; i++){
        if(finish[participant[i]]===undefined){
            return participant[i];
        }else{
            if(finish[participant[i]] - 1 === 0){
                delete finish[participant[i]];
            }else{
                finish[participant[i]]--;
            }
        }
    };
    
    
    if(Object.keys(finish)[0]) return Object.keys(finish)[0];
}