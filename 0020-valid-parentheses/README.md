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

<h1>😎나의 풀이</h1>

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let arr = [];
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i = 0; i < s.length; i++) {
        if(pairs[s[i]]) {
            arr.push(pairs[s[i]]);
        } else {
            if(s[i] !== arr.pop()) return false;
        }
    }
    return arr.length === 0;
};
```
우선 s의 길이가 홀수인 경우 바로 false를 반환하도록 해주었고
pairs를 만들어 괄호의 짝을 만들어준 후 여는 괄호면 arr에 그 짝인 닫는 괄호를 넣어주고
닫는 괄호면 arr.pop()을 하여 그것과 비교하여 다른 경우 false를 반환하도록 해주었습니다.

<h1>✍️다른 풀이</h1>

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    stack = []
    sArr = [...s]
    sArr.forEach(c=>{
        if(stack[stack.length-1] === '(' && c == ')' || stack[stack.length-1] === '[' && c == ']' || stack[stack.length-1] === '{' && c == '}'){
            stack.pop()
        }else{
            stack.push(c)
        }
    })
    return stack.length === 0
};
```

1. stack = []: 빈 스택을 생성합니다. 이 스택은 열린 괄호들을 임시로 저장하는 역할을 합니다.
2. sArr = [...s]: 입력 문자열 s를 하나의 문자 배열로 변환하여 sArr에 저장합니다.
3. sArr.forEach(c=>{...}): sArr의 각 문자 c에 대해 반복문을 실행합니다.
- 만약 스택의 맨 위에 있는 괄호와 현재 문자 c가 올바르게 짝을 이루는 괄호라면((와 ), [와 ], {와 }), 스택에서 맨 위에 있는 괄호를 제거(pop)합니다.
- 만약 스택의 맨 위에 있는 괄호와 현재 문자 c가 올바르게 짝을 이루지 않는다면, 현재 문자 c를 스택에 추가(push)합니다.
4. return stack.length === 0: 모든 문자의 검사가 끝난 후, 스택이 비어있는지 확인합니다. 만약 스택이 비어있다면, 모든 괄호들이 올바르게 짝을 이루고 있다는 의미이므로 true를 반환합니다. 만약 스택이 비어있지 않다면, 일부 괄호들이 짝을 이루지 못하고 있다는 의미이므로 false를 반환합니다.
