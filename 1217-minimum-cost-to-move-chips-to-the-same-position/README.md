<h2><a href="https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/">1217. Minimum Cost to Move Chips to The Same Position</a></h2><h3>Easy</h3><hr><div><p>We have <code>n</code> chips, where the position of the <code>i<sup>th</sup></code> chip is <code>position[i]</code>.</p>

<p>We need to move all the chips to <strong>the same position</strong>. In one step, we can change the position of the <code>i<sup>th</sup></code> chip from <code>position[i]</code> to:</p>

<ul>
	<li><code>position[i] + 2</code> or <code>position[i] - 2</code> with <code>cost = 0</code>.</li>
	<li><code>position[i] + 1</code> or <code>position[i] - 1</code> with <code>cost = 1</code>.</li>
</ul>

<p>Return <em>the minimum cost</em> needed to move all the chips to the same position.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg" style="width: 750px; height: 217px;">
<pre><strong>Input:</strong> position = [1,2,3]
<strong>Output:</strong> 1
<strong>Explanation:</strong> First step: Move the chip at position 3 to position 1 with cost = 0.
Second step: Move the chip at position 2 to position 1 with cost = 1.
Total cost is 1.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg" style="width: 750px; height: 306px;">
<pre><strong>Input:</strong> position = [2,2,2,3,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> position = [1,1000000000]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= position.length &lt;= 100</code></li>
	<li><code>1 &lt;= position[i] &lt;= 10^9</code></li>
</ul>
</div>


<br/>

# 💟 다른 사람의 풀이 

```js
/**
 * @param {number[]} position
 * @return {number}
 */

var minCostToMoveChips = function(position) {
    var odd = 0;
    var even = 0;
    position.map((x) => (x % 2 ? (odd += 1) : (even += 1)));
    return Math.min(odd, even);
};
```

<br/>

# 🤔 접근 방식 
- 생각보다 간단하게 생각하면 풀 수 있는 문제
- 짝수와 홀수로 나누어 생각하고
- map으로 순회하며 짝수일 경우 홀수 += 1, 아니면 짝수 += 1 (이동 코스트 추가)
- 둘 중 최소 값 반환하면 최소 이동 비용 결과값 도출

<br/>
