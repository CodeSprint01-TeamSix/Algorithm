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


<h1>😎나의 풀이</h1>

```js
var twoSum = function(nums, target) {
    for(let i=0;i < nums.length;i++){
        for(let j=i+1; j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                  return [i,j]
            }
        }
    }
};
```

<h1>✍️다른 사람 풀이</h1>

```js
var twoSum = function(nums, target) {
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        let neededNumber = target - nums[i];

        if(hashMap.has(neededNumber)) {
            return [i, hashMap.get(neededNumber)];
        } 
        hashMap.set(nums[i], i);

    }
};
```

<h1>✍️Map 객체 사용 방법</h1>

```js
let max = new Map();
​
// set으로 맵 객체에 삽입
max.set('id', 0);
max.set('이름', '마이클');
max.set('전공', '영문학');
max.set('나이', 25);
​
// 이차원 배열로 넘겨주는 것도 가능합니다
let michael = new Map([
  ['id', 0],
  ['이름', '마이클'],
  ['전공', '영문학'],
  ['나이', 29],
]);
​
// get으로 맵 객체 조회
max.get('이름'); // "마이클"
​
// delete로 삭제
max.delete('나이'); // 삭제가 성공하면 true를 반환
​
// clear로 맵 안의 프로퍼티 전부삭제
max.clear();
```
