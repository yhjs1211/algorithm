function solution(array) {
    let obj={}
    for(let i in array){
        if(obj[array[i]]==undefined){
           obj[array[i]]=1;
        }else{
            obj[array[i]]++;
        }
    }
    let answer=0;
    let tmp=0;
    Object.entries(obj).forEach(v=>{
        if(tmp<v[1]){
            answer=Number(v[0]);
            tmp=v[1];
        }else if(tmp==v[1]){
            answer=-1;
        }
    })
    return answer;
}