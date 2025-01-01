function solution(ingredient) {
    let result = 0;
    let stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= 4) {
            if(stack.slice(-4).join('') === '1231') {
                result++;
                stack.splice(-4, 4);
            }
        }
    }
    
    return result;
}