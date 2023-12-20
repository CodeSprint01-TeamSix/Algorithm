/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //하나씩 배열에 넣으면서 중복되는 수 나오면 배열에 clear하고 count 저장하고 해당 인덱스부터 시작
    let count = 0;
    let arr = [];
    let now = '';
    for (let i = 0; i<s.length;i++){
        now=s[i];
        if (!arr.includes(s[i])){
            arr.push(s[i]);
        } else{
            arr = [];
            i = i-1;
            while(now!==s[i]){
                i=i-1;
            }
            
        }
        if(arr.length>count){
            count = arr.length;
        }
    }
    return count;
};