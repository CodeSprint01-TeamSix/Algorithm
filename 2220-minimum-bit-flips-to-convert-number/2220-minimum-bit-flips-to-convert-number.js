/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    start = start.toString(2).split('');
    goal = goal.toString(2).split('');

    while(start.length !== goal.length) {
        if(start.length > goal.length) {
            goal.unshift('0');
        } else if(start.length < goal.length) {
            start.unshift('0');
        }
    }

    let cnt = 0;

    for(let i = 0; i < start.length; i++) {
        if(start[i] !== goal[i]) cnt++;
    }

    return cnt;
};