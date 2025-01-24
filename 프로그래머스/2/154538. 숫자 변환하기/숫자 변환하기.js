function solution(x, y, n) {
    if(x === y) return 0;
    
    let cnt = 0;
    let temp = new Set([x]);
    let visited = new Set([x]);
    
    while(temp.size > 0) {
        let nextTemp = new Set();
        
        for(const current of temp) {
            const nextX = [current + n, current * 3, current * 2];
            
            for(const next of nextX) {
                if(next > y || visited.has(next)) continue;
                if(next === y) return cnt + 1;
                
                nextTemp.add(next);
                visited.add(next);
            }
        }
        
        temp = nextTemp;
        cnt++;
    }
    
    return -1;
}
