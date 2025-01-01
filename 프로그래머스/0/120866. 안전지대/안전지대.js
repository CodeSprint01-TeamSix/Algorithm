function solution(board) {
    const n = board.length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 1) {
                for(const [dx, dy] of directions) {
                    const nx = dx + i;
                    const ny = dy + j;
                    
                    if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
                        board[nx][ny] = 2;
                    }
                }
            }
        }
    }
    
    let cnt = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 0) cnt++;
        }
    }
    
    return cnt;
}