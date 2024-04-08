function solution(clothes) {
    let map = new Map();
    let result = 1;
    
    for (const [key, value] of clothes) {
        map.set(value, (map.get(value) || 0) + 1);
    }
    
    for(const [key, value] of map) {
        result *= value + 1;
    }
    
    return result - 1;
}