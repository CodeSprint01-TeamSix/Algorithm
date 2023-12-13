/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 최저 값이 들어가있는 index필요
    // 최저 index 값이 최고 index보다 작으면 두값의 차를 구할수 있음
    
    let max = 0;
    let value;
    for(let i = 0; i < prices.length; i++) {
        if(value === undefined || value > prices[i]) {
            value = prices[i] //배열 요소 하나씩 돌면서 최소값을 찾는다
        } else {
            if(max < prices[i] - value) {
                max = prices[i] - value;  //각 요소 - value값 계산
            }
        }
    }
   return max
};

   // 나의 실패한 풀이

   /*  최저부터 값구하기
    const min_price = Math.min(...prices)
    const numIndex = prices.findIndex(v => min_price === v);
    const max_price = Math.max(...prices.slice(numIndex))

    return  numIndex !== prices.length -1 ? max_price - min_price : 0 */


    /* 시간초과
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            value = prices[j] - prices[i]
            max = max < value ? value : max 
        }
    }
    
    return max */