function solution(arr) {
    let tmp=arr[0];
    if(arr.length!=1){
        for(let i=1; i<arr.length; i++){
            if(tmp>arr[i])tmp=arr[i];
        }
        while(arr.includes(tmp)){
            arr.splice(arr.indexOf(tmp),1);
        }
    }else{
        return [-1];
    }
    return arr;
}