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

function solution(maps) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const xLen = maps.length;
    const yLen = maps[0].length;
    const goalX = xLen - 1;
    const goalY = yLen - 1;

    const queue = [];
    // [시작 x좌표, 시작 y좌표, 이동거리 카운트]          
    queue.push([0, 0, 1]);

    while(queue.length) {
        // queue에서 현재 x좌표, 현재 y좌표, 이동한 거리를 반환
        const [curX, curY, move] = queue.shift();

        // [xLen - 1, yLen - 1] 도착 지점의 좌표
        if(curX === goalX && curY === goalY) return move;

        for(let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];

            if(nx >= 0 && nx < xLen && ny >= 0 && ny < yLen && maps[nx][ny] === 1) {
                queue.push([nx, ny, move + 1]);
                maps[nx][ny] = 0;
            }
        }
    } 
    return -1;
}