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

<h1>😎나의 풀이</h1>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!nums.includes(target)) {
     nums.push(target);   
    }
    return nums.sort((a,b) => (a-b)).indexOf(target);
};
```
nums에 target이 들어있지 않으면 push를 통해 추가를 해주고
nums를 오름차순으로 정리해준 후 target의 위치를 indexOf로 찾는 방식을 사용했습니다.

<h1>✍️다른 풀이</h1>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right){
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target)
            left = mid+1;
        else
            right = mid;
        console.log("mid", mid, "left", left, "right", right)
    }
    return left;
};
```

1. left = 0; right = nums.length;: left와 right 포인터를 초기화합니다. left는 검색 범위의 시작점을, right는 검색 범위의 끝점을 나타냅니다.
2. while (left < right): left가 right보다 작은 동안 반복문을 실행합니다. 이는 검색 범위 내에 아직 확인하지 않은 요소가 있는 경우를 나타냅니다.
3. let mid = left + Math.floor((right - left) / 2);: 현재 검색 범위의 중간점을 계산합니다.
4. if (nums[mid] < target) left = mid+1; else right = mid;: 중간점의 값과 target 값을 비교합니다.
- 만약 중간점의 값이 target보다 작다면, target은 중간점의 오른쪽에 있을 수 있으므로, 검색 범위의 시작점 left를 중간점의 다음 위치로 이동합니다.
- 만약 중간점의 값이 target보다 크거나 같다면, target은 중간점의 위치나 그 왼쪽에 있을 수 있으므로, 검색 범위의 끝점 right를 중간점의 위치로 이동합니다.
5. console.log("mid", mid, "left", left, "right", right): 현재 중간점, 시작점, 끝점의 위치를 콘솔에 출력합니다. 이는 디버깅을 돕기 위한 출력입니다.
6. return left;: 반복문이 종료되면, left는 target의 위치나 target이 삽입되어야 할 위치를 나타냅니다. 따라서 left를 반환합니다.
