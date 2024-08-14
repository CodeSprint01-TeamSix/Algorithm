function solution(arr, k) {
    let newArr = [...new Set(arr)];
    
    while(newArr.length !== k) {
        if(newArr.length > k) {
            newArr.pop()
        } else if(newArr.length < k) {
            newArr.push(-1)   
        }
            
    }
    return newArr
}