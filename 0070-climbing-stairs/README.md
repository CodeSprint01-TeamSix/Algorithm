<h2><a href="https://leetcode.com/problems/climbing-stairs/">70. Climbing Stairs</a></h2><h3>Easy</h3><hr><div><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>
</div>


<h1>😎나의 풀이</h1>

```js
var climbStairs = function(n) {
    if(n === 1) return 1
    if(n === 2) return 2

    return climbStairs(n-2) + climbStairs(n-1);
};
```
이렇게 처음 풀었는데 시간 초과가 뜨며 실패를 했다...

<h1>✍️다른 사람 풀이</h1>

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 2) return 1;

    let num1 = 1;
    let num2 = 1;
    let num3;
    
    for(let i = 2; i <= n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};
```
이렇게 변수를 만들어주고 거기에 반복해서 대입하면서 푸는 방식에 대해 새롭게 알게 되었다.
