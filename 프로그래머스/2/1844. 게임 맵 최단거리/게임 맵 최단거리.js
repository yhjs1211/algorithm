function solution(maps) {
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const m = maps[0].length; // X
    const n = maps.length;    // Y
    const goal = [n-1,m-1];
    
    const moveQueue = [[0,0,1]]; // [x,y,move]
    
    while(moveQueue.length){
        const [x, y, move] = moveQueue.shift();
        maps[x][y]=0;
        
        if(goal[0]===x && goal[1]===y) return move;
        
        for(let i=0; i<4; i++){
            const [nx, ny] = [x+dx[i], y+dy[i]];
            if( nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 ){
                moveQueue.push([nx, ny, move+1]);
                maps[nx][ny]=0;
            }
        }
    }
    
    return -1;
}


// function solution(maps) {
//     const dx = [1, 0, -1, 0];
//     const dy = [0, 1, 0, -1];
//     const n = maps[0].length; // X
//     const m = maps.length;    // Y
//     const goal = [n-1,m-1];
    
//     const moveQueue = [[0,0,1]]; // [x,y,move]
    
//     while(moveQueue.length){
//         const [x, y, m] = moveQueue.shift();
        
//         if(goal[0]===x && goal[1]===y) return m;
        
//         for(let i=0; i<4; i++){
//             const [nx, ny] = [x+dx[i], y+dy[i]];
//             if( nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 ){
//                 moveQueue.push([nx, ny, m+1]);
//                 maps[nx][ny]=0;
//             }
//         }
//     }
    
//     return -1;
// }
