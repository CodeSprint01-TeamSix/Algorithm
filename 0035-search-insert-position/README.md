<h2><a href="https://leetcode.com/problems/search-insert-position/">35. Search Insert Position</a></h2><h3>Easy</h3><hr><div><p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>

<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,5,6], target = 5
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,5,6], target = 2
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> nums = [1,3,5,6], target = 7
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

### 나의 풀이
```javascript
var searchInsert = function(nums, target) {
   const findNum = nums.findIndex(num => num === target)
   if(findNum > -1) return findNum
    
   nums.push(target)
   const rangeNums = nums.sort((a,b) => a - b);
   const newFindNum = rangeNums.findIndex(num => num === target)
   
   return newFindNum
};
```

1. findIndex 메서드를 사용하여 처음 배열값에 target이 있다면 index값을 반환하고 값이 존재하지않아 -1를 출력한다면
2. 기존 배열에 target을 추가하여 정렬시키고 findIndex 메서드 사용하여 target이 된 배열에서 index 값을 반환해준다
