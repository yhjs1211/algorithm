function solution(N, number) {
    const objSet = {};
    for(let i=0; i<8; i++){
        // 객체 내 key : 사용횟수 , value : 발생 가능한 Number
        objSet[i+1]=new Set([parseInt(`${N}`.repeat(i+1))]);
        for(let j=0; j<i; j++){
            for(const num1 of objSet[j+1]){
                for(const num2 of objSet[i - j]){
                    // 사칙연산 경우의 수 추가
                    objSet[i+1].add(num1+num2); // add
                    objSet[i+1].add(num1-num2); // sub
                    objSet[i+1].add(Math.floor(num1/num2)); // div
                    objSet[i+1].add(num1*num2); // mul
                }
            }
        }
        // for문 순회 후 해당 set에 존재할 경우 반환
        if(objSet[i+1].has(number)) return i+1;
    }
    return -1;
}