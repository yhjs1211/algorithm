function solution(numbers, target) {
    const stackObj = {
        '0':[0]
    };
    numbers.forEach((n,idx)=>{
        stackObj[idx+1]=[];
        if(idx===0){
            stackObj[idx+1]=[0+n,0-n]; // [1, -1]
        }else{
            for(let i=0; i<stackObj[idx].length; i++){
                stackObj[idx+1].push(stackObj[idx][i]+n);
                stackObj[idx+1].push(stackObj[idx][i]-n);
            }
        }
    });
    
    return stackObj[numbers.length].filter((n)=>n===target).length;
}