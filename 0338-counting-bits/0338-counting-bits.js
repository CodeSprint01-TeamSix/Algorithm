/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = []
    
    for(let i = 0; i <= n; i++) {
       const binary = (i >>> 0).toString(2)
       const binaryArry = `${binary}`.split("")
       let count = 0;
       binaryArry.forEach(num => {
           if(num === "1") {
               count+=1
           }
       })
       
       result.push(count)
    }
    return result
    
};