/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let cnt = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        let prev = (i === 0) ? 0 : flowerbed[i-1];
        let cur = flowerbed[i]
        let next = (i === flowerbed.length - 1) ? 0 : flowerbed[i+1];

        if(prev === 0 && cur === 0 && next === 0) {
            cnt++;
            flowerbed[i] = 1;
        }
    }

    return cnt >= n;
};
