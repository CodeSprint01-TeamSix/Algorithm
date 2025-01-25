/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    const sortedN = [...n].sort().map(Number);
    
    return sortedN[sortedN.length - 1];
};