function solution(food) {
    let result = [0];
    
    food.shift()
    food.reverse()
    
    for(let i = 0; i < food.length; i++) {
        if(food[i] !== 1) {
            for(let j = 0; j < Math.floor(food[i] / 2); j++) {
                result.push(food.length - i);
                result.unshift(food.length - i);
            }
        }
    }
    return result.join('');
}
