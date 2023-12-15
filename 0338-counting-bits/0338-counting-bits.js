/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    for(let i = 0;i<=n;i++){
        let bin = '';
        let num = i;
        //이진수로 바꾸기 (문자열 형태로)
        while(num/2!==0){
            bin=bin+String(num%2);
            num=Math.floor(num/2);
        }
        //해당 문자열에서 1갯수 세서 arr에 넣기
        arr.push(bin.split("").filter((a)=> a==='1').length);
    }
    return arr;
};