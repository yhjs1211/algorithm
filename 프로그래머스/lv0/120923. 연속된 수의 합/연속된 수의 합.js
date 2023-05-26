function solution(num, total) {
    let div = Math.floor(total/num);

    let halfNum = Math.floor(num/2);

    let arr = [];

    let cnt = 0;
    for(let i = div-halfNum; i<=div+halfNum; i++){
        cnt+=i;
        arr.push(i);
    }
    while(cnt!=total){
        cnt-=arr.shift();
    }

    return arr;
}