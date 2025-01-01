function solution(dirs) {
    const directions = {
        'U': [1, 0],
        'D': [-1, 0],
        'R': [0, 1],
        'L': [0, -1],
    };
    let arrive = [0, 0];
    let visit = new Set();
    
    const path = (start, arrive) => {
        const x1 = start[0]
        const y1 = start[1]
        const x2 = arrive[0]
        const y2 = arrive[1]
        
        return `${Math.min(x1, x2)},${Math.min(y1, y2)} -> ${Math.max(x1, x2)},${Math.max(y1, y2)}`;
    }
    
    for(const dir of dirs) {
        let start = [...arrive];
        
        arrive[0] += directions[dir][0];
        arrive[1] += directions[dir][1];
        
        if(arrive[0] > 5 || arrive[0] < -5 || arrive[1] > 5 || arrive[1] < -5) {
            arrive = [...start];
            continue;
        }
        
        if(!visit.has(path(start, arrive))) {
            visit.add(path(start, arrive));
        }
    }
    
    return visit.size;
}