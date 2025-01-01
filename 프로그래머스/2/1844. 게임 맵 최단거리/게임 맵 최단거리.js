function solution(maps) {
    const directions = [
        [0, 1], // 오른쪽
        [1, 0], // 아래쪽
        [0, -1], // 왼쪽
        [-1, 0], // 윗쪽
    ];
    const n = maps.length;
    const m = maps[0].length;
    let queue = [[0, 0, 1]];
    
    while(queue.length > 0) {
        const [x, y, dist] = queue.shift()
        
        if(x === n - 1 && y === m - 1) return dist;
        
        for(const [dx, dy] of directions) {
            const nx = dx + x;
            const ny = dy + y;
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                queue.push([nx, ny, dist + 1]);
                maps[nx][ny] = 0;
            }
        }
    }
    
    return -1;
}