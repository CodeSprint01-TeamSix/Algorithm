​<h2><a href="https://leetcode.com/problems/palindrome-number/">9. Palindrome Number</a></h2><h3>Easy</h3><hr><div><p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?</div> <br><br>


<hr>

## 문제의 핵심: x의 backward된 값을 어떻게 가져올까? <br><br>

## 😀 나의 풀이 <br>
```
var isPalindrome = function(x) {
    const x_string = String(x);
    for(let i = 0;i<x_string.length;i++){
        if(x_string[i]!==x_string[x_string.length-i-1]){
            return false;
        }
        continue;
    }
    return true;
};
```
<br>
-> x값을 string값으로 String 객체를 통해서 바꾼 후, 그 길이만큼 반복문을 돌면서 맨 앞의 값 맨 뒤의 값들을 순서대로 하나씩 비교하면서, 다른 순간이 있으면, palindrome이 아니므로, return flase한다. 반복문이 모두 끝났음에도 return이 되지않았다면, palindrome이므로 true를 반환한다. <br><br>

## ⭕ 다른 사람의 풀이 <br>
```
var isPalindrome = function(x) {
    let arr =  x.toString().split("").reverse().join("");
    return x == arr ? true: false;
};
```
->  나도 x를 뒤에서부터 처리한 그 문자열 값을 어떻게 가져올까에 대한 고민이 많았다. 이 풀이에서는 reverse함수를 사용해주었다! split을 통해 각 문자로 분리해서 배열로 만들고, reverse해서 거꾸로 배치한 후, join함수를 통해 다시 문자열로 묶어주었다. <br>

```
var isPalindrome = function(x) {
    const arr = String(x).split('');
        
    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    
    return true;
};
```
-> 여기서는 맨 앞의 값을 제거하는 shift함수와 맨 뒤의 값을 제거하는 pop함수를 이용했다. 맨 앞, 맨 뒤 값을 비교한다는 것은 나와 같은 풀이 흐름이다. <br><br>

## 🔶 What I learned <br>
- reverse 함수: 문자열은 바로 reverse가 안되고, 배열 형태로 바꾸어서 reverse 해주어야 함! <br>
- shift: 배열에서 앞의 값을 제거/ pop: 배열에서 뒤의 값을 제거 <br>
-> 문자열의 뒤에서부터 접근하는 문제는 문자열을 split을 통해 배열로 바꾼 후, reverse나 shift/pop함수 사용 가능!
