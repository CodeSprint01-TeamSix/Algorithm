/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// function gcd(a, b) {
//     let result = 1;

//     for(let i = 2; i <= Math.min(a, b); i++) {
//         if(Math.max(a, b) % i === 0 && Math.min(a, b) % i === 0) {
//             result = i;
//         }
//     }
//     return result;
// }
function gcd(a, b) {
    while(b !== 0) {
        const temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return '';

    let GCD = gcd(str1.length, str2.length);
    return str1.substr(0, GCD);
};