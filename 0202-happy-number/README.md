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

<h1>😎나의 풀이</h1>

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let strN = n.toString()
    while(n.length !== 1) {
        n = 0;
        for(let i = 0; i < strN.length; i++) {
            n += Math.pow(strN[i]);
        }
    }
    if(n.length === 1) {
        if(n === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        
    }
};
```
문제를 푸는데 실패했습니다.

<h1>✍️다른 풀이</h1>

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
const visited = {}

  while (true) {
    if (visited[n]) {
      return false;
    }

    let newN = 0;
    let nCopy = n;

    while (nCopy > 0) {
      newN += (nCopy % 10) ** 2;
      nCopy = Math.floor(nCopy / 10);
    }  

    if (newN === 1) {
      return true;
    }

    visited[n] = true;
    n = newN;
  }
};
```

1. visited라는 이름의 빈 객체를 생성합니다. 이 객체는 이미 검사한 숫자를 추적하기 위해 사용됩니다.
2. 그 다음에는 무한 반복문을 시작합니다. 이 반복문은 숫자 n이 1이 될 때 또는 이전에 방문했던 숫자가 나타날 때까지 반복됩니다.
3. 반복문 내에서, 만약 n이 이미 visited 객체에 있다면, 즉 이미 검사한 숫자라면 false를 반환합니다. 이는 숫자가 1이 될 수 없다는 것을 의미하며, 따라서 '행복한 수'가 아님을 나타냅니다.
4. 그 다음에는 newN이라는 새로운 변수를 0으로 초기화하고, nCopy라는 변수에 n을 복사합니다.
5. 이후, nCopy가 0이 될 때까지 다음 작업을 반복하는 내부 반복문을 시작합니다. 이 반복문에서는 nCopy의 각 자릿수를 제곱하여 newN에 더하고, nCopy는 10으로 나눈 후 소수점 이하는 버립니다.
6. 만약 newN이 1이라면, n은 '행복한 수'이므로 true를 반환하고 함수를 종료합니다.
7. 그렇지 않다면, n을 visited 객체에 저장하여 이후 동일한 수가 나오면 바로 종료할 수 있도록 합니다. 그리고 newN을 n에 할당하고 다음 반복문을 시작합니다.
