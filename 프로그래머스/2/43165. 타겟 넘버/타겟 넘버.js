function solution(numbers, target) {
    let result = 0;
    
    function dfs(index, currentSum) {
        // 종료조건: 모든 숫자를 다 사용했을 때
        if(index === numbers.length) {
            if(currentSum === target) {
                result++;
            }
            
            return;
        }
        
        dfs(index + 1, currentSum + numbers[index])
        
        dfs(index + 1, currentSum - numbers[index])   
    }
    
    dfs(0, 0);
    
    return result;
}