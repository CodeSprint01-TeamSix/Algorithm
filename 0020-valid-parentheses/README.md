<h2><a href="https://leetcode.com/problems/valid-parentheses/">20. Valid Parentheses</a></h2><h3>Easy</h3><hr><div><p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "(]"
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
</ul>
</div>


문제 풀이
```javascript
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            if (stack.pop() !== map[s[i]]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```

처음에 정규표현식으로만 해결해보려했는데 잘 안돼서
배열과 객체를 활용해서 해보았습니다.

- 반복문을 실행하고
- 매개변수 s의 인덱스에 (, [, { 일치하면 stack 배열에 추가하고 아니면 
- stack.pop() 메서드를 사용해서 배열 마지막 요소 제거하고 출력도해줍니다
-  요소값과 map 객체 s[i] 값이 일치하지 않으면 false를 반환합니다.
- 위 조건이 일치하면 조건을 통과하지 않고 반복문을 실행하거나 s.length 길이까지의 조건을 도달하면 반복문이 종료되고
- stack 배열은 빈배열이기 때문에 길이가 0과 일치하므로 true를 반환해줍니다
