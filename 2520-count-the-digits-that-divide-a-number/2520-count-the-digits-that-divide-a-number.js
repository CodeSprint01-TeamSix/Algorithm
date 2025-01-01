/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let cnt = 0;
    let newNum = [...num.toString()];
    
    for(let i = 0; i < newNum.length; i++) {
        if(num % newNum[i] === 0) cnt++;
    }

    return cnt;
};