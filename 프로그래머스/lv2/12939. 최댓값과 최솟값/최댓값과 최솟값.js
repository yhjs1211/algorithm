function solution(s) {
    let answer;
    
    let arr = s.split(' ');
    let max = arr[0];
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(Number(arr[i])>max)max=arr[i];
        if(Number(arr[i])<min)min=arr[i];
    }
    answer = min+' '+max;
    return answer;
}