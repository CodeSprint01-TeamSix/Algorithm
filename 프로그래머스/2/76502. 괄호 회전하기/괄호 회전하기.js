function solution(s) {
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        let stack = [];
        for(let j = 0; j < s.length; j++) {
            if(s[j] === '[' || s[j] === '{' || s[j] === '(') {
                stack.push(s[j]);
            } else {
                if(stack.length !== 0) {
                    if(s[j] === ']' && stack.pop() !== '[' || s[j] === '}' && stack.pop() !== '{' || s[j] === ')' && stack.pop() !== '(') {
                        stack.push(s[j])
                        break;
                    } 
                } else {
                    stack.push(s[j])
                }
            }
        }
        if(stack.length === 0) result++;
        s = s.slice(1) + s[0];
    }
    return result;
}
