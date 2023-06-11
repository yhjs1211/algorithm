function solution(dots) {
    let x;
    let y;
    for(let i=0; i<2; i++){
        for(let j=1; j<4; j++){
            let standard = dots[0][i];
            let compare = dots[j][i];
            if(i==0){
                if(standard==compare){
                    let stY = dots[0][i+1];
                    let coY = dots[j][i+1];
                    stY>coY ? y=stY-coY : y=coY-stY;
                }
            }else{
                if(standard==compare){
                    let stX = dots[0][i-1];
                    let coX = dots[j][i-1];
                    stX>coX ? x=stX-coX : x=coX-stX;
                }
            }
        }
    }
    return x*y;
}