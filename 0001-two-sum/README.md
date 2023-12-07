<h2><a href="https://leetcode.com/problems/two-sum/">1. Two Sum</a></h2><h3>Easy</h3><hr><div><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?</div>

### ✔️나의 풀이

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const resultIndex = {}

    function onCheck(num) {
        if(num in resultIndex) {
           return; 
        } 

        resultIndex[num] = num
        
    }

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                onCheck(j)
            }
        }
    }
    return Object.keys(resultIndex)
};
```
1. 빈 객체를 만든다
2. 2중 for문으로 두개의 값을 더해서 traget의 값과 같으면 oncheck 함수로 index를 인수로 전달했습니다.
3. onCheck함수에서 받은 매개변수 num을 resultIndex 객체에서 해당 값이 있는지 체크하고 없으면 객체에 추가 없으면 함수 종료
4. 반복문이 끝나면 resultIndex 추가된 최종 값을 배열형태로 만들어서 반환한다.

- 문제점은 메모리는 덜 드는데 속도가 느리다.
