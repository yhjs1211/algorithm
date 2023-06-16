function solution(n) {
    let answer;
    let num=n+1;
    while(binary(n)!=binary(num)){
        if(binary(n)!=binary(num)){
            num++;
        }
    }
    answer=num;
    return answer;
}

function binary(num){
    let cnt=0;
    while(num!=1){
        if(num%2==0){
            num/=2;
        }else{
            num=(num-1)/2;
            cnt++;
        }
    }
    cnt++;
    return cnt;
}