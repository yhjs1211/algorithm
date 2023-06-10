function solution(quiz) {
    let answer = [];
    quiz.forEach(v=>{
        answer.push(checkValidation(v));
    })
    return answer;
}

function checkValidation(str){
    let [cal,result]=str.split(' = ');
    let [num1,oper,num2]=cal.split(' ');
    let number;
    oper=='+'?  number=Number(num1)+Number(num2) : number=Number(num1)-Number(num2);
    let answer;
    number==Number(result) ? answer="O" : answer="X";
    return answer;
}