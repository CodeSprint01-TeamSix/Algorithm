function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let result = 0;
    
    while(queue.length > 0) {
        let current = queue.shift();
        
        if(queue.some(([priority, _]) => priority > current[0])) {
            queue.push(current);
        } else {
            result++;
            
            if(current[1] === location) {
                return result;
            }
        }
    }
}