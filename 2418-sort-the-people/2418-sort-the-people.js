/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result = [];

    for(let i = 0; i < names.length; i++) {
        result.push([names[i], heights[i]]);      
    }

    let sortedArr = result.sort((a,b) => b[1] - a[1]).map(e => e[0])
    
    return sortedArr
};