/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.replaceAll('()', 'o').replaceAll('(al)', 'al')
    
    return command
};