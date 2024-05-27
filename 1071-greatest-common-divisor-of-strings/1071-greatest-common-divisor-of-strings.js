/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    //두 문자를 앞뒤로 연결했을 때 일치하지 않으면
    if ((str1 + str2) !== (str2 + str1)) {
        return "";
    }
    
    //최대공약수
    function gcd(a, b) {
        if(b === 0) {
            return a
        } else {
           return  gcd(b, a % b)
        }
    }   
    
    const gcdLength = gcd(str1.length, str2.length);
    
    return str1.substring(0, gcdLength);
};




//두 문자열 s와 t의 경우, s = t + t + t + ... + t + t(즉, t가 한 번 이상 그 자체와 연결되는 경우)인 경우에만 "t를 나눕니다"라고 합니다.

//두 문자열 str1과 str2가 주어졌을 때, x가 str1과 str2를 모두 나누는 가장 큰 문자열 x를 반환합니다

//공통으로 들어가는 문자?찾기