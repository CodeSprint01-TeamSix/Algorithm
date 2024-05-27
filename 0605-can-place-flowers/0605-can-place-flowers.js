/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            const prev = (i === 0 || flowerbed[i-1] === 0)
            const next = (i === flowerbed.length -1 || flowerbed[i+1] === 0)
            
            if(prev && next) {
                flowerbed[i] = 1
                count++
            }
         
        }
    }
    return count >= n ? true : false
};

//일부 플롯에는 꽃이 심어져 있고 일부는 심어져 있지 않은 긴 화단이 있습니다. 그러나 인접한 플롯에는 꽃을 심을 수 없습니다.

//0과 1이 포함된 정수 배열 화단(0은 비어 있고 1은 비어 있지 않음을 의미)과 정수 n이 주어질 때, 인접 꽃 금지 규칙을 위반하지 않고 화단에 새로운 꽃을 심을 수 있으면 참을 반환하고, 그렇지 않으면 거짓을 반환합니다.