/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let result = '';

    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let secret = '';

    for(let i = 0; i < key.length; i++) {
        if(!secret.includes(key[i]) && key[i] !== ' ') secret += key[i];
    }

    for(let i = 0; i < message.length; i++) {
        if(secret.indexOf(message[i]) === -1) {
            result += ' ';
        } else {
            result += alpha[secret.indexOf(message[i])];
        }
    }

    return result;
};