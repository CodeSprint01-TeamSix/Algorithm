/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b) => b - a);
    let sum = 0;
    
    for(let i = 0; i < cost.length; i += 3) {
       sum += cost[i] || 0;
       sum += cost[i+1] || 0;
    }

    return sum
};