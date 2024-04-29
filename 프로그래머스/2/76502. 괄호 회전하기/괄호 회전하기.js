function solution(s) {
    var answer = 0;
    const list = {
        ']':'[',
        '}':'{',
        ')':'('
    }
    const new_s = s.concat(s)
    
    for(let i = 0; i < s.length; i++) {
        const slice_new_s = new_s.slice(i, s.length+i)
        const stack = []
        let isValid = true
         //console.log(i, slice_new_s)
        
        for(let j = 0; j < slice_new_s.length; j++) {
            //console.log('stack',stack)
            if (slice_new_s[j] === '[' || slice_new_s[j] === '(' || slice_new_s[j] === '{') {
                stack.push(slice_new_s[j]); 
            } else {
                if (stack.length > 0 && stack[stack.length - 1] === list[slice_new_s[j]]) {
                    stack.pop();
                } else {
                    isValid = false; 
                    break; 
                }
            }
        }
       
        if(isValid && stack.length == 0) {
            answer += 1
            //console.log('answer',answer)
        }
        
    }
    return answer;
}