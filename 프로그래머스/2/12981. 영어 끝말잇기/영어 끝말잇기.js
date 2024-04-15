function solution(n, words) {
    let stack = [];
    
    for(let i = 0; i < words.length - 1; i++) {
        stack.push(words[i]);
        // console.log(stack[i].substr(stack[i].length - 1, 1))
        // console.log(words[i+1].substring(0, 1))
        if(stack[i].substr(stack[i].length - 1, 1) !== words[i+1].substring(0, 1)) {
            console.log(1)
            console.log(i)
            console.log(Math.ceil((i+1) / n))
            return [((i+1) % n) + 1, Math.ceil((i+2) / n)];
        }
        if(stack.includes(words[i+1])) {
            console.log(2)
            return [((i+1) % n) + 1, Math.ceil((i+2) / n)];
        }
    }
    return [0, 0]
}