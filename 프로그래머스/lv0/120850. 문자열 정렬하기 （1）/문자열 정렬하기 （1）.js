function solution(my_string) {
    
    let arr = my_string.replace(/[a-z]/g,'').split('');

    for(let i=0; i<arr.length-1; i++){
        let idx=i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[idx]>arr[j])idx=j;
        }
        let tmp = arr[i];
        arr[i]=arr[idx];
        arr[idx]=tmp;
    }
    return arr.map(v=>Number(v));
}