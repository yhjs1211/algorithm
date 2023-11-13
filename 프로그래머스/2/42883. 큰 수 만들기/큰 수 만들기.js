function solution(number, k) {
    const stack = [];
    
    for(let i=0; i<number.length; i++){
        const num = number[i];

        while( k !== 0 && stack[stack.length-1] < num ){
            stack.pop();
            k--;
        }
        stack.push(num);
        
        if(k===0){
            number.slice(i+1).split('').forEach((n)=>stack.push(n));
            break;
        }
    }
    
    while(k!==0){
        stack.pop();
        k--;
    }
    
    return stack.join('');
}

/*
"99999", 2, "999"
*/