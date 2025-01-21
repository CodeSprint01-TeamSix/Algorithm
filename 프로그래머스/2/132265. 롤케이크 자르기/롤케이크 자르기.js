function solution(toppings) {
    let cnt = 0;
    let left = new Map();
    let right = new Map();

    for(let topping of toppings) {
        right.set(topping, (right.get(topping) || 0) + 1);
    }
    
    for(let topping of toppings) {
        right.set(topping, right.get(topping) - 1);
        if(right.get(topping) === 0) right.delete(topping);
        
        left.set(topping, (left.get(topping) || 0) + 1);
        
        if(right.size === left.size) cnt++;
    }
    
    return cnt;
}