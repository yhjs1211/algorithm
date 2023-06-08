function solution(dots) {
    var answer = 0;
    let first = dots[0];
    for(let i=1; i<dots.length; i++){
        if(i==1){
            let x1 = first[0]-dots[i][0];
            let y1 = first[1]-dots[i][1];
            let x2 = dots[2][0]-dots[3][0];
            let y2 = dots[2][1]-dots[3][1];
            if(x1/y1==x2/y2)answer=1;
        }else if(i==2){
            let x1 = first[0]-dots[i][0];
            let y1 = first[1]-dots[i][1];
            let x2 = dots[1][0]-dots[3][0];
            let y2 = dots[1][1]-dots[3][1];
            if(x1/y1==x2/y2)answer=1;
        }else{
            let x1 = first[0]-dots[i][0];
            let y1 = first[1]-dots[i][1];
            let x2 = dots[2][0]-dots[1][0];
            let y2 = dots[2][1]-dots[1][1];
            if(x1/y1==x2/y2)answer=1;
        }
    }
    return answer;
}