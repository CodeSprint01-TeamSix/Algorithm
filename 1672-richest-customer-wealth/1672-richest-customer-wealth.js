/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;

    for(let i = 0; i < accounts.length; i++) {
        let answer = accounts[i].reduce((prev, next) => prev + next, 0);
        if(result < answer) result = answer;
    }

    return result;
};