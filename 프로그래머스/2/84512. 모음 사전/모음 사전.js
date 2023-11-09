function solution(word) {
    const arr = ['A','E','I','O','U'], arr1 = [], arr2 = [], arr3 = [], arr4 = [];

    arr.forEach((ch)=>{
        for(let i=0; i<arr.length; i++){
            arr1.push(ch.concat(arr[i]));
        }
    });
    arr1.forEach((ch)=>{
        for(let i=0; i<arr.length; i++){
            arr2.push(ch.concat(arr[i]));
        }
    });
    arr2.forEach((ch)=>{
        for(let i=0; i<arr.length; i++){
            arr3.push(ch.concat(arr[i]));
        }
    });
    arr3.forEach((ch)=>{
        for(let i=0; i<arr.length; i++){
            arr4.push(ch.concat(arr[i]));
        }
    });
    
    const words = arr.concat(arr1,arr2,arr3,arr4).sort();
    
    return words.indexOf(word)+1;
}