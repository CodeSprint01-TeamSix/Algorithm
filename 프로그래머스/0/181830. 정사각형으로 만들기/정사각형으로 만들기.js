function solution(arr) {
    let row = arr[0].length;
    let col = arr.length
    
    if(row > col) {
        for(let i = 0; i < row - col; i++) {
            arr.push(Array(row).fill(0))
        }
    } else if(row < col) {
        for(let i = 0; i < col; i++) {
            for(let j = 0; j < col - row; j++) {
                arr[i].push(0);
            }
        }
    } 
    return arr
}