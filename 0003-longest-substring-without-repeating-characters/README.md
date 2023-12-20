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
</div> <br><br>

<hr>

## 😀 나의 풀이: <br>
```
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
```
-> arr라는 배열에 substring들을 저장한다. 그래서 s의 요소 하나씩 접근하면서, arr에 존재하지 않는 문자라면 계속해서 arr배열에 push를 한다. 그러다가 이미 존재하는 문자인 경우에는 else문을 실행하며, arr 배열을 빈 배열로 초기화해주고, 현재 값과 같지 않은 값까지 i값을 조정시켜준다. count 값도 계속 업데이트 시켜 나가준다. 굉장히 복잡하게 풀었고, 풀이를 생각하는 것은 어렵지 않았다. 하지만 생각지도 못한 테스트 케이스에서 에러가나서, 그 예외 처리해주는 데 오랜 시간이 걸린 문제이다. 배열에 넣어서 검사하는 것말고 또 다른 방법은 없을까?<br><br>

## ❤️ 다른 사람의 풀이: <br>

## 🔶 What I learned: <br>


