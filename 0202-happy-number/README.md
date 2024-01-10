<h2><a href="https://leetcode.com/problems/happy-number/">202. Happy Number</a></h2><h3>Easy</h3><hr><div><p>Write an algorithm to determine if a number <code>n</code> is happy.</p>

<p>A <strong>happy number</strong> is a number defined by the following process:</p>

<ul>
	<li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
	<li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
	<li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
</ul>

<p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

나의 풀이(다른 사람 문제 풀이)
```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const arr = [];
   
    while (n !== 1) {
        n = n.toString().split("").reduce((a, b) => a + b**2, 0);
        console.log(arr)
        console.log(n)
        if (arr.indexOf(n) !== -1) return false;
        arr.push(n)
    }
    return true
};
```
1. n을 문자와 배열로 바꿔서 reduce를 사용하여 값을 구해준다 (1 + 81 = 82)
2. 값이 구하고 n에 할당
3. 조건문에서 arr 배열안에 n값이 있으면 return false 없으면 arr에 push
4. n값이 1이 나온다면 반복문 종료하고 true 리턴

참고 사이트 https://github.com/okcleff/LeetCode-Algorithm/blob/main/202-happy-number/202-happy-number.js
