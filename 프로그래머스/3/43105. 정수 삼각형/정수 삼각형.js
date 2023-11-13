function solution(triangle) {
    for(let i=triangle.length-1; i>=0; i--){
        for(let j=0; j<triangle[i].length-1; j++){
            const numLeft = triangle[i][j];
            const numRight = triangle[i][j+1];
            numLeft > numRight
                ? triangle[i-1][j]+=numLeft
                : triangle[i-1][j]+=numRight
        }
    }
    return triangle[0][0];
}

