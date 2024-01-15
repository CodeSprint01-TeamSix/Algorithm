<h2><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">3. Longest Substring Without Repeating Characters</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword="substring-nonempty"><strong>substring</strong></span> without repeating characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>
</div>

<h1>😎나의 풀이</h1>

### 첫번째 풀이 실패
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxArr = 1;
    if(s.length === 0) return 0;
    for(let i = 0; i < s.length; i++) {
        let answer = [];
        for(let j = i; j < s.length; j++) {
            if(s[i] !== s[j]) {
                answer.push(s[j])
            }else {
                if(maxArr < answer.length) {
                    maxArr = answer.length;
                }
            }
        }
    }
    return maxArr;
};
```
몇개의 케이스에서 실패했다.

<h1>✍️다른 풀이</h1>

```js
var lengthOfLongestSubstring = function(s) {
    let subStr = "";
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (subStr.includes(s[i])) {
            subStr = subStr.slice(subStr.indexOf(s[i]) + 1);
        }
        subStr += s[i];
        if (maxLength < subStr.length) {
            maxLength = subStr.length;
        }
    }
    return maxLength;
};
```

우선 이 풀이의 시간 복잡도는 O(n)입니다.

1. subStr이라는 빈 문자열을 생성합니다. 이 변수는 현재 확인 중인 부분 문자열을 저장하는데 사용됩니다.
2. maxLength라는 변수를 0으로 초기화합니다. 이 변수는 지금까지 발견된 가장 긴 중복되지 않는 부분 문자열의 길이를 저장합니다.
3. for 루프를 사용하여 문자열 s의 각 문자를 차례대로 확인합니다. i는 현재 확인 중인 문자의 위치를 가리킵니다.
4. if 문을 사용하여 subStr에 s[i]가 포함되어 있는지 확인합니다.
5. s[i]가 subStr에 포함되어 있다면, subStr.indexOf(s[i]) + 1부터 subStr의 끝까지를 새로운 subStr로 설정합니다. 즉, s[i]를 처음으로 발견한 위치 이후의 문자열을 새로운 subStr로 설정하며, 이는 곧 슬라이딩 윈도우가 오른쪽으로 이동함을 의미합니다.
6. s[i]가 subStr에 포함되어 있지 않다면, subStr에 s[i]를 추가합니다.
7. maxLength와 subStr의 길이를 비교하고, subStr의 길이가 maxLength보다 크다면, maxLength를 subStr의 길이로 업데이트합니다.
8. 마지막으로, 가장 긴 중복되지 않는 부분 문자열의 길이인 maxLength를 반환합니다.
