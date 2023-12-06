<h2><a href="https://leetcode.com/problems/longest-common-prefix/">14. Longest Common Prefix</a></h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>
</div>

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = strs[0].split("")  // 기준이 될 단어를 변수에 할당하고

    for(let i = 1; i < strs.length; i++) { //strs 배열을 반복문으로 돌려준다
      common = common.filter((word, index) => { //common값을 filter 메서드를 사용
          let sliceWord =common.slice(0, index + 1).join(""); // common.slice로 ex) f 일때 fl일때 단어 하나씩 slice로 늘려줘서 변수에 담고
          return strs[i].indexOf(sliceWord) > -1 && strs[i][index] === sliceWord[index]
   // slice 된 단어를 strs[i] 단어에 있는지 indexOf를 사용해서 확인하고 있으면 참 그리고 일치하는 글자가 순서에 맞게 추출한건지 조건 추가 ex) rsc == rac 이럴때 2번째 조건 없으면 rc 추출함
// filter 반복문 끝나고 추출된 단어 common에 새로운 배열형태로 반환
            
        })
       console.log(common)
        
    }
    return common ? common.join("") : "" // common 변수에 값이 있으면 join메서드로 합치고 아니면 빈문자열
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
```
