/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let result = [];

    for(let i = 0; i < boxes.length; i++) {
        let cnt = 0;
        for(let j = 0; j < boxes.length; j++) {
            if(i === j) {
                continue;
            }

            if(boxes[j] !== '0') {
                cnt += Math.abs(i - j);
            }

        }

        result.push(cnt);
    }

    return result;
};