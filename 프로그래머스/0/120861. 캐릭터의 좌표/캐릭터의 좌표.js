function solution(keyinput, board) {
    let result = [0, 0]
    let xRange = Math.floor(board[0] / 2)
    let yRange = Math.floor(board[1] / 2)
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === 'left' && result[0] > -xRange) {
            result[0]--;
        } else if(keyinput[i] === 'right' && result[0] < xRange) {
            result[0]++;
        } else if(keyinput[i] === 'up' && result[1] < yRange) {
            result[1]++;
        } else if(keyinput[i] === 'down' && result[1] > -yRange) {
            result[1]--;
        }
    }
    return result;
}