function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i] - 1] === 0) {
                continue;
            } else {
                stack.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
        
        if(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.splice(-2, 2);
            result += 2;
        }
    }
    
    return result;
}