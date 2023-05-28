function solution(num_list) {
    let arr = [0,0];
    num_list.forEach(v=>{
        if(v%2==0){
            arr[0]++;
        }else{
            arr[1]++;
        }
    })
    return arr;
}