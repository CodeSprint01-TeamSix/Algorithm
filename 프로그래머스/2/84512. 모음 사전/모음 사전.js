function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let result = [];
    
    const dfs = (current, length) => {
        if(length > vowels.length) return;
        
        result.push(current);
        
        for(const v of vowels) {
            dfs(current + v, length + 1);
        }
    }
    
    dfs('', 0);
    
    return result.indexOf(word);
}