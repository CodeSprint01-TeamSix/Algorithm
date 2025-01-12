function solution(n) {
    const result = Array.from({length: n}, () => Array(n).fill(0));
    const directions = [
        [0, 1], // 오른
        [1, 0], // 아래
        [0, -1], // 왼
        [-1, 0], // 위
    ]
    let x = 0, y = 0;
    let direction = 0; // 0: 오, 1: 아래, 2: 왼, 3: 위
    let num = 1; // 채울 숫자;
    
    for(let i = 0; i < n*n; i++) {
        result[x][y] = num;
        num++;
        
        const [dx, dy] = directions[direction];
        const nx = dx + x;
        const ny = dy + y;
        
        if(nx >= 0 && ny >= 0 && nx < n && ny < n && result[nx][ny] === 0) {
            x = nx;
            y = ny;
        } else {
            direction = (direction + 1) % 4;
            x += directions[direction][0];
            y += directions[direction][1];
        }
    }
    
    return result;
}