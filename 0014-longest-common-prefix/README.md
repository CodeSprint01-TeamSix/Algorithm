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


내 풀이
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let result = '';
    const sortedStrs = strs.sort((a, b) => a.length - b.length);

    if(sortedStrs.length === 1) return sortedStrs[0];

    for(let i = 0; i < sortedStrs[0].length; i++) {
        for(let j = 1; j < sortedStrs.length; j++) {
            if(sortedStrs[j][i] !== sortedStrs[0][i]) return result;
        }
        result += sortedStrs[0][i]
    }
    return result;
};
```

다른 사람 풀이
```js
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};
```
```js
var longestCommonPrefix = function(strs) {
    let answer = ''; // 빈 문자열 만들기
    
    for(let i=0; i < strs[0].length; i++) {
        let char = strs[0][i]; // char에 첫 번째 단어의 알파벳 하나씩 할당
        
        if(!char) return ''; // 단어가 비어있으면 빈 문자열 리턴
        if(strs.every(str => str[i] === char)) {
            answer += char; // 모든 단어의 인덱스 값이 char와 동일하면 answer에 해당 알파벳 추가
        } else break;
    }
    return answer;
};
```

- every를 사용하는 것은 생각도 안해봤는데 다음에는 사용해봐야겠다.
