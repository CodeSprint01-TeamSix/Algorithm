<h2><a href="https://leetcode.com/problems/counting-bits/">338. Counting Bits</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>'s</strong> in the binary representation of </em><code>i</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> [0,1,1]
<strong>Explanation:</strong>
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> [0,1,1,2,1,2]
<strong>Explanation:</strong>
0 --&gt; 0
1 --&gt; 1
2 --&gt; 10
3 --&gt; 11
4 --&gt; 100
5 --&gt; 101
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong></p>

<ul>
	<li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li>
	<li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li>
</ul>
</div>

<h1>😎나의 풀이</h1>

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [0];
    for(let i = 1; i <= n; i++) {
        let binary = i.toString(2);
        let count = binary.split('').filter(bit => bit === '1').length;
        result.push(count);
    }
    return result;
};
```
반복문을 돌면서 2진수로 변경 후 1의 갯수를 result에 추가했습니다.

<h1>✍️다른 풀이</h1>

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var dp = new Array(n + 1).fill(0);
    var sub = 1;

    for (var i = 1; i <= n; i++) {
        if (sub * 2 === i) {
            sub = i;
        }

        dp[i] = dp[i - sub] + 1;
    }

    return dp;    
};
```
우선 이 풀이의 시간 복잡도는 O(n)입니다.

1. dp라는 배열을 생성하고, 모든 요소를 0으로 초기화합니다. 이 배열의 크기는 입력값 n에 1을 더한 값입니다. 이 배열은 각 숫자의 비트에 1이 몇 개 있는지를 저장합니다.
2. sub라는 변수를 1로 초기화합니다. 이 변수는 이전에 저장된 2의 거듭제곱 값을 저장합니다.
3. 1부터 n까지 순회합니다.
- 만약 현재 숫자가 sub의 2배라면, sub을 현재 숫자로 업데이트합니다. 이는 2의 거듭제곱 수를 찾기 위한 과정입니다.
- dp[i]를 계산합니다. dp[i]는 dp[i - sub] + 1입니다. 이는 현재 숫자에서 가장 가까운 2의 거듭제곱 수를 뺀 숫자의 1의 개수와, 뺀 값(2의 거듭제곱 수는 항상 1의 비트가 1개인 숫자이므로)의 1의 개수를 합한 값입니다.
4. dp 배열을 반환합니다. 이 배열의 i번째 요소는 숫자 i의 비트에 1이 몇 개 있는지를 나타냅니다.
