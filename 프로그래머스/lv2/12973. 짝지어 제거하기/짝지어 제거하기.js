function solution(s){
    let answer;
    let stack = [];
    for(let i=0; i<s.length;i++){
        if(stack.length==0){
            stack.push(s[i]);
        }else{
            if(stack[stack.length-1]==s[i]){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
    }
    answer= stack.length==0 ? 1:0;
    return answer;
}