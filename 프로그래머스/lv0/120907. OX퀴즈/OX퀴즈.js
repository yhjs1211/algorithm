function solution(quiz) {
    let answer = [];
    quiz.forEach(v=>{
        answer.push(checkValidation(v));
    })
    return answer;
}

function checkValidation(str){
    let arr = str.split(' ');
    let num =0;
    let result;
    let cal = true;
    arr.forEach(v=>{
        if(v!='='){
            if(v!='+' && v!='-'){
                cal ? num+=Number(v) : cal==null ? result=Number(v) : num-=Number(v); 
            }else{
                v=='+' ? cal=true : cal=false;
            }
        }else{
            cal=null;
        }
    })
    let answer;
    num==result ? answer="O" : answer="X";
    return answer;
}