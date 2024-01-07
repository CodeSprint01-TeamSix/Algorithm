<h2><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/">26. Remove Duplicates from Sorted Array</a></h2><h3>Easy</h3><hr><div><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>. Then return <em>the number of unique elements in </em><code>nums</code>.</p>

<p>Consider the number of unique elements of <code>nums</code> to be <code>k</code>, to get accepted, you need to do the following things:</p>

<ul>
	<li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the unique elements in the order they were present in <code>nums</code> initially. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li>
	<li>Return <code>k</code>.</li>
</ul>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>
</div>

<h1>😎나의 풀이</h1>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums.length;
};
```
반복문을 돌면서 같은 것이 있으면 splice를 이용하여 삭제하는 방법을 사용했습니다.

<h1>✍️다른 풀이</h1>

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
};

```
우선 이 풀이의 시간 복잡도는 O(n)입니다.

1. minPrice와 maxProfit이라는 두 변수를 초기화합니다. minPrice는 prices 배열의 첫 번째 요소로 설정하고, maxProfit은 0으로 설정합니다. minPrice는 지금까지 발견한 가장 낮은 주식 가격을 저장하며, maxProfit은 지금까지 발견한 가장 큰 이익을 저장합니다.
2. prices 배열의 두 번째 요소부터 순회를 시작합니다. (인덱스 1부터 시작)
3. 현재 요소가 minPrice보다 작다면, minPrice를 현재 요소로 업데이트합니다. 즉, 새로운 최소 주식 가격을 발견한 경우입니다.
4. 현재 요소가 minPrice보다 크다면, 현재 요소와 minPrice의 차이를 계산하여 이익을 구합니다. 이 이익과 현재까지의 최대 이익 maxProfit을 비교하여, 더 큰 값으로 maxProfit을 업데이트합니다.
5. 모든 요소를 순회한 후, maxProfit을 반환합니다. 이 값이 주식을 한 번만 구매하고 한 번만 판매하여 얻을 수 있는 최대 이익입니다.
이 알고리즘은 "최소 구매 가격"을 유지하면서 "최대 판매 가격"을 찾는 방식으로 작동합니다. 이렇게 하면 한 번의 순회로 최대 이익을 찾을 수 있습니다.
