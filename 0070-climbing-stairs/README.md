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

### 나의 풀이(다른 사람 풀이 해석)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs = new Array(n).fill(0);
    stairs[1] = 1;
    stairs[2] = 2;
    
    for(let i = 3; i<= n; i++) {
        stairs[i] = stairs[i-2] + stairs[i-1];
    }
    return stairs[n]
};
```
```
### 코드 해석
n = 2 {
  stairs = [0, 0 , 0]
  stairs[1] = 1;
  stairs[2] = 2;
  stairs = [0, 1, 2]

  i = 3, n = 2
  for문 i <= n(3 <= 2) 조건 false

  return stairs[n]  = n=2이므로 return 2
}

n = 3 {
 stairs = [0, 0, 0, 0]
 stairs[1] = 1;
 stairs[2] = 2;
 stairs = [0, 1, 2, 0]

 i = 3, n = 3
 for 문 i <= n(3 <= 3) 조건 true
 stairs[i] = stairs[3-2](1) + stairs[3-1](2)
 stairs[3] = 3
}
 stairs = [0, 1, 2, 3]
 return stairs[n]  = n=3 이므로 return 3

n = 4 {
 stairs = [0, 0, 0, 0, 0]
 stairs[1] = 1;
 stairs[2] = 2;
 stairs = [0, 1, 2, 0, 0]

 i = 3, n = 4
 for 문 i <= n(3 <= 4) 조건 true
 stairs[i] = stairs[i-2]([3-2] = 1) + stairs[i-1]([3-1] = 2) 
 stairs[3] = 3
 stairs[i] = stairs[i-2]([4-2] = 2) + stairs[i-1]([4-1] = 3) 
 stairs[4] = 5
}
 stairs = [0, 1, 2, 3, 5]
 return stairs[n]  = n=4 이므로 return 5

}
```

참고 자료
1. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
2. https://eunjinii.tistory.com/124
