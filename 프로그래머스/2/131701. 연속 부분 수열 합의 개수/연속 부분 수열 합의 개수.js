function solution(elements) {
    let set = new Set();
    let arr = [...elements, ...elements.slice(0, elements.length - 1)]
    
    for(let i = 1; i <= elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            set.add(arr.slice(j, j+i).reduce((a,b) => a + b, 0));
        }
    }

    return set.size;
}

