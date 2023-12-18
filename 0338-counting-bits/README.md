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

### 나의 풀이
```javascript
var countBits = function(n) {
    const result = []
    
    for(let i = 0; i <= n; i++) {
       const binary = (i >>> 0).toString(2)
       const binaryArry = `${binary}`.split("")
       let count = 0;
       binaryArry.forEach(num => {
           if(num === "1") {
               count+=1
           }
       })
       
       result.push(count)
    }
    return result
    
};
```
### 참고자료
이진수 변경 https://devjiraynor.github.io/2022-04-09-js-bitwise/
```javascript
10진수 -> 2진수
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

2진수 -> 10진수
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
```
