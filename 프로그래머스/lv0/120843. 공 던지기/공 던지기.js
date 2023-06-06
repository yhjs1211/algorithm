function solution(numbers, k) {
    // let linkedList=[];
    // for(let i=0; i<numbers.length; i++){
    //     if(i==numbers.length-1){
    //         linkedList.push(new Node(numbers[i],numbers[0]));
    //     }else{
    //         linkedList.push(new Node(numbers[i],numbers[i+1]));
    //     }
    // }
    // let answer;
    // for(let i=0; i<k*2; i++){
    //     answer=i
    // }
    
    let answer;
    k*2%numbers.length==0 ? answer=numbers[numbers.length-2] : answer = numbers[(k*2-2)%numbers.length];
    return answer;
}

class Node{
    value;
    next;
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}