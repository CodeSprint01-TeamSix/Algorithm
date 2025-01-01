function solution(n, words) {
    let stack = [words[0]];
    
    for(let i = 1; i < words.length; i++) {
        if(stack.includes(words[i]) || stack[stack.length - 1][stack[stack.length - 1].length - 1] !== words[i][0]) {
            return [i % n + 1, Math.ceil((i + 1) / n)]
        }  else {
            stack.push(words[i]);
        }
    }
    return [0, 0]
}