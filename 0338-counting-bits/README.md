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
</div> <br><br>

<hr>

## 😀 나의 풀이: <br>
```
var countBits = function(n) {
    let arr = [];
    for(let i = 0;i<=n;i++){
        let bin = '';
        let num = i;
        //이진수로 바꾸기 (문자열 형태로)
        while(num!==0){
            bin=bin+String(num%2);
            num=Math.floor(num/2);
        }
        //해당 문자열에서 1갯수 세서 arr에 넣기
        arr.push(bin.split("").filter((a)=> a==='1').length);
    }
    return arr;
};
```
-> 숫자 하나씩 돌면서, 이진수로 바꾸고, filter함수를 통해 1의 개수를 세는 방식으로 코드를 짰다. 이진수로 바꾸는 부분은 몫, 나머지 연산자를 활용해서 문자열 형태로, bin 변수에 저장을 해주었다. <br><br>

## ⭕ 다른 사람의 풀이: <br>
```
var countBits = function(n) {
    let result = new Array(n+1).fill(0);
    for(let i=1; i<n+1; i++) {
        result[i] = i.toString(2).match(/1/g).length
    }

    return result
    
};
```
-> toString함수에 매개변수 2를 전달해서 2진수로 바꿔주었다. 그리고 정규표현식을 활용해 1의 갯수를 result 배열에 저장해주었다. 이렇게 2진수를 구하는 함수와 1의 갯수를 세는 더 편한 함수가 있을 것이라고는 생각했지만, 최대한 그 메서서들을 사용하지 않고, 문제풀이를 하고 싶었다.<br> <br>

## 🔶 What I learned: <br>
- 2진수로 바꾸기: toString(2) <br>
- 1의 수 검사: 정규표현식, filter 함수 
