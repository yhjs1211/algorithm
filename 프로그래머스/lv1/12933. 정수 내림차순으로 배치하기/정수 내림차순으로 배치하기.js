function solution(n) {
    let arr = String(n).split('');
    const len = arr.length;
    
    for(let i=0; i<len-1; i++){
        let idx = i;
        for(let j=i+1; j<len; j++){
            if(arr[idx]<arr[j]) idx = j;
        }
        const tmp = arr[idx];
        arr[idx]=arr[i];
        arr[i]=tmp;
    }
    
    
    return parseInt(arr.join(''));
}