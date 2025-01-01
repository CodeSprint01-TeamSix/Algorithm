function solution(sizes) {
    let row = [];
    let col = [];
    
    for(let i = 0; i < sizes.length; i++) {
        row.push(Math.max(...sizes[i]))
        col.push(Math.min(...sizes[i]))
    }
    
    return Math.max(...row) * Math.max(...col)
}