function solution(str1, str2) {
    function makeMultiSet(str) {
        let result = [];
        
        for(let i = 0; i < str.length - 1; i++) {
            let pair = str[i] + str[i+1]
            
            if(/^[a-zA-Z]{2}$/.test(pair)) {
                result.push(pair.toUpperCase());
            }   
        }
        return result;
    }
    
    let str1Arr = makeMultiSet(str1);
    let str2Arr = makeMultiSet(str2);
    
    let map1 = {}
    let map2 = {}
    
    str1Arr.forEach(item => map1[item] = (map1[item] || 0) + 1);
    str2Arr.forEach(item => map2[item] = (map2[item] || 0) + 1);
    
    let intersection = 0;
    let union = 0;
    
    let allKeys = new Set([...str1Arr, ...str2Arr])
    
    allKeys.forEach(key => {
        let count1 = map1[key] || 0;
        let count2 = map2[key] || 0;
        
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    })
    
    return union ? Math.floor((intersection / union) * 65536) : 65536
}