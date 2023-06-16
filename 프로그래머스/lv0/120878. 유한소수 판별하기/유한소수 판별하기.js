function solution(a, b) {
    let answer;
    if(a>b){
        b = div(a,b)[1];
        answer=chk(b);
    }else{
        b = div(b,a)[0];
        answer=chk(b);
    }
    return answer;
}

function div(num1,num2){
    for(let i=num2; i>=2; i--){
        if(num1%i==0 && num2%i==0){
            num1/=i;
            num2/=i;
            break;
        }
    }
    return [num1,num2];
}

function chk(num){
    let answer;
    let su=2;
    while(num!=1){
        if(num%su==0){
            num/=su;
        }else{
            if(su==8){
                answer=2;
                break;
            }
            su+=3;
        }
    }
    if(answer!=2)answer=1;
    return answer;
}