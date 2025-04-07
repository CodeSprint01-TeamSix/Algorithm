/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    const n = colors.length;
    let max = 0;

    for(let i = 0; i < n; i++) {
        if(colors[i] !== colors[0]) {
            max = Math.max(i, max);
        }

        if(colors[i] !== colors[n - 1]) {
            max = Math.max(max, n - 1 - i);
        }
    }

    return max
};