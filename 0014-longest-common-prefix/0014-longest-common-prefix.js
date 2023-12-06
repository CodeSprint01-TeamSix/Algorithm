/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = strs[0].split("")

    for(let i = 1; i < strs.length; i++) {
      common = common.filter((word, index) => {
          let sliceWord =common.slice(0, index + 1).join("");
          return strs[i].indexOf(sliceWord) > -1 && strs[i][index] === sliceWord[index]

            
        })
       console.log(common)
        
    }
    return common ? common.join("") : ""
};


// 실패한 코드들....
/* common = common.filter((word, index) => {
            if(word === strs[i][index]){
                return word
            } else {
                return;
            }
        }) */

       /*  for(let j = 0; j < common.length; j++) {
           
       } */

/* 
let sliceWord =common.slice(0,j + 1).join("");
           if(strs[i].indexOf(sliceWord) > -1) {
              common2 = sliceWord
           } else {
               break
           } */