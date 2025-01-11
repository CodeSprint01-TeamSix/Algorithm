function solution(park, routes) {
    const directions = { N: [-1, 0], S: [1, 0], E: [0, 1], W: [0, -1] };
    let start = [0, 0];
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[0].length; j++) {
            if(park[i][j] === 'S') {
                start = [i, j];
                break;
            }
        }
    }
    
    let location = [...start]
    
    for(const route of routes) {
        const [direction, distance] = route.split(' ');
        const [dx, dy] = directions[direction];
        let [x, y] = location;
        
        let valid = true;
        
        for(let i = 0; i < parseInt(distance); i++) {
            x += dx;
            y += dy;
            
            if(x < 0 || y < 0 || x >= park.length || y >= park[0].length || park[x][y] === 'X') {
                valid = false;
                break;
            }
        }
        
        if(valid) {
                location = [x, y];
            }
    }
    
    return location;
}