function solution(cacheSize, cities) {
    let cache = []
    let time = 0;
    
    for(let i = 0; i < cities.length; i++) {
        if(cacheSize === 0) return cities.length * 5;
        
        cities[i] = cities[i].toUpperCase();
        
        if(cache.includes(cities[i])) {
            let hitIndex = cache.indexOf(cities[i])
            cache.splice(hitIndex, 1)
            time++;
        } else {
            time += 5;
        }
        
        if(cache.length >= cacheSize) {
            cache.shift();
        }
        cache.push(cities[i])
    }
    return time;
}