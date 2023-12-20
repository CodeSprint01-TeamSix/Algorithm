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

나의 풀이(case1, 2 통과했으나 3에서 막힘)
```javascript
var lengthOfLongestSubstring = function(s) {
    const answer = {}

    s.split("").forEach((word, index) => {
        if(word in answer) {
            return
        } else {
            answer[word]=index
        }
    })
    console.log(answer)
    return Object.keys(answer).join("").length
```
객체로 넣어서 중복된거 구분은 했는데 하위 문자열 체크가 안되네요

다른사람 문제 풀이(코드 보기 좋아서 참고했습니다.)
```javascript
var lengthOfLongestSubstring = function(s) {
    let subStr = "";
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (subStr.includes(s[i])) {   ----------------- 1번
            subStr = subStr.slice(subStr.indexOf(s[i]) + 1);
        }
        subStr += s[i];   --------------------2번
        if (maxLength < subStr.length) {  ------------------3번
            maxLength = subStr.length;
        }
	console.log(subStr)  ------------4번
    }
    return maxLength;
};
```
case3 예시로 들면
Input: s = "pwwkew"

subStr: 반복문 진행되면서 문자 하나씩 추가 할당<br>
maxLength: 3번 조건에서 subStr에 몇개의 문자가 추가는지 체크해줍니다.<br>

1번 조건에는 중복된 문자가 subStr에 있는지 체크합니다<br>
중복 문자가 없으면 2번으로 넘어가서 문자 추가하고<br>
3번 조건에서 subStr 문자열 길이 체크해줍니다.<br>

1번 조건이 true가 나오면(중복된 문자가 나오면) subStr.indexOf에서 중복 문자위치를 인덱스로 리턴하고 인덱스값에 +1 해서 slice해줍니다<br> 

예를 들어 문자 w(index2번)가 들어오면 subStr = subStr.slice(2(indexOf에서 리턴) + 1)하면 <br>
subStr문자열 인덱스3번부터 쭉 출력해줘야하는데 subStr 인덱스 3번부터는 값이 없기때문에 빈문자열로 바뀝니다<br>

그리고 다시 2번 코드 실행되면서 중복체크된 w가 subStr에 할당되고 3번에서 길이 체크됩니다<br>

이렇게 계속 반복되면서 각 문자열 최대 길이를 체크하면서 반복문 종료됩니다.<br>

4번 출력
p
pw
w
wk
wke
kew

