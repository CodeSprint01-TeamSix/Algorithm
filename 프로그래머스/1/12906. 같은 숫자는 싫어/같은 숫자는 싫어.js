function solution(arr){
    let result = [];
    let stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(stack[0] === arr[i]) {
            continue;
        } else {
            stack.pop();
            result.push(arr[i])
            stack.push(arr[i])
        }
    }
    return result;
}
