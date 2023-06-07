function solution(balls, share) {
    let answer;
    
    let ballsFac = Array.from({length:balls},(_,idx)=>idx+1).reduce((pre,cur)=>pre*cur);
    let shareFac = Array.from({length:share},(_,idx)=>idx+1).reduce((pre,cur)=>pre*cur);
    let ballsSubShareFac = Array.from({length:balls-share},(_,idx)=>idx+1).reduce((pre,cur)=>pre*cur,1);
    
    answer = ballsFac/(ballsSubShareFac*shareFac);
    return Math.round(answer);
}