function solution(brown, yellow) {
    let area = brown + yellow;
    
    for(let col = 3; col <= area / col; col++) {
        if(area % col === 0) {
            let row = area / col;
            
            if((row-2)*(col-2) === yellow) return [row, col]
        }
    }
}

// let area = brown + yellow;

// 가로 >= 세로
// -> 가로 >= 넓이/세로

// return [row, col]

// row x col = brown + yellow
//           = area


// o o o
// o o o
// o o o


// o o o o
// o o o o
// o o o o

// o o o o o o o o
// o o o o o o o o
// o o o o o o o o
// o o o o o o o o
// o o o o o o o o
// o o o o o o o o