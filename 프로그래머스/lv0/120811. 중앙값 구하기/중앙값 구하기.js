function solution(array) {
    for(let i=0; i<array.length-1; i++){
        let idx=i;
        for(let j=i+1; j<array.length; j++){
            if(array[idx]>array[j])idx=j;
        }
        let tmp=array[i];
        array[i]=array[idx];
        array[idx]=tmp;
    }
    
    
    return array[Math.floor(array.length/2)];
}