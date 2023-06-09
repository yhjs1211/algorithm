function solution(keyinput, board) {
    let answer = [0,0];
    let maxPointOfX = Math.floor(board[0]/2);
    let maxPointOfY = Math.floor(board[1]/2);
    keyinput.forEach(v=>{
        if(v=='left'){
            if(answer[0]!=maxPointOfX*-1)answer[0]--;
        }else if(v=='right'){
            if(answer[0]!=maxPointOfX)answer[0]++;
        }else if(v=='up'){
            if(answer[1]!=maxPointOfY)answer[1]++;
        }else{
            if(answer[1]!=maxPointOfY*-1)answer[1]--;
        }
    })
    return answer;
}