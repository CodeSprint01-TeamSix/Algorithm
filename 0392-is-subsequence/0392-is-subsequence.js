/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let i = 0; 
    let j = 0; 

    while (i < s.length && j < t.length) { // s의 길이와 t의 길이에 도달하면 종료
        if (s[i] === t[j]) { // 두 단어의 해당 요소가 일치하면 i++
            i++;
        }// j는 다음 요소의 인덱스부터 시작해줘야해서 반복할때마다 j++
        j++;
    }

    return i === s.length; // s길이와 i의 일치 횟수가 일치하면 true
    
    
    
    
    
    //let start = 0
    //for(let i = 0; i < s.length; i++) {
      //  if(start <= [...t].indexOf(s[i])   && [...t].indexOf(s[i]) !== -1) {
      //      start = [...t].indexOf(s[i])
      //  } else {
      //      return false
      //  }
   // }
   // return true
    
};