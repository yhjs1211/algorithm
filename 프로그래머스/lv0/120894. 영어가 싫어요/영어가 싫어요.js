function solution(numbers) {
    let numArr=['zero','one','two','three','four','five','six','seven','eight','nine'];
    numArr.forEach(v=>{
        while(numbers.includes(v)){
            numbers=numbers.replace(v,numArr.indexOf(v));
        }
    })
    return Number(numbers);
}