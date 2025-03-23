/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = [];

    for(let i = 0; i <= rowIndex; i++) {
        let row = Array(i + 1).fill(1);

        for(let j = 1; j < i; j++) {
            row[j] = triangle[i-1][j-1] + triangle[i-1][j];
        }

        triangle.push(row);
    }
    
    return triangle.pop()
};