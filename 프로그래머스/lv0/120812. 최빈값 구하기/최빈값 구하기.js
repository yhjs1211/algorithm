function solution(array) {
 
    let m = new Map();
    
    array.forEach(v=>{
        if(m.has(v)){
            m.set(v,m.get(v)+1);
        }else{
            m.set(v,1);
        }
    });

    let tmp = 0;
    let answer = 0;
    m.forEach((v,k)=>{
        if(v>tmp){
            answer=k;
            tmp=v;
        }else if(v==tmp){
            answer=-1;
        }
    })



    return answer;
}