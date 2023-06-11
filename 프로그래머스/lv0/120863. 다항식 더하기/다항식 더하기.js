function solution(polynomial) {
    let answer='';
    let arr = polynomial.split(' + ');
    let numX=0;
    let num=0;
    arr.forEach(v=>{
        if(v.includes('x')){
            if(v.split('').length==1){
                numX++;
            }else{
                numX+=Number(v.replace('x',''));    
            }
        }else{
            num+=Number(v);
        }
    });
    if(numX>=1){
        if(numX==1){
            if(num!=0){
                answer+='x + '+num;
            }else{
                answer='x';
            }
        }else{
            if(num!=0){
                answer+=(numX+'x + '+num);
            }else{
                answer+=(numX+'x');    
            }
        }
    }else{
    if(num!=0){
            answer+=num;
        }
    }
    return answer;
}