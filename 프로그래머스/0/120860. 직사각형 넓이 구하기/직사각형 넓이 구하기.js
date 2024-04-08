function solution(dots) {
    let x = [];
    let y = [];
    
    for(let i = 0; i < dots.length; i++) {
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    x = [...new Set(x)];
    y = [...new Set(y)];
    
    return (Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]))
}