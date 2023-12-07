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
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?</div> <br><br>


<hr>

## ⚒️ 문제의 핵심: 어떻게 두 수를 가져올 것이느냐 <br>

## 😀 나의 풀이: <br>
: 이중 반복문을 돌면서, 바깥 차례대로 2개씩 가져와서 합이 target 인경우에 인덱스들을 반환하게끔 하였다!!! 처음에 되게 복잡하게 생각해서, 하나씩 접근하면서 target에서 그 값을 뺀 값이 배열에 존재하는 경우 반환하게끔 하였는데... 예외처리할 것이 많아져서 다른 풀이 방법을 생각해보고, 이렇게 간단한 풀이를 생각해보았다. 그런데,, 이중 반복문이 많은 메모리를 잡아먹는 것은 아닐지.. 시간 복잡도 : O(N^2)/ 공간 복잡도 : O(1)<br><br>

## ⭕ 다른 사람의 풀이: <br>
```
public int[] twoSum(int[] nums, int target) {
    //2. using map
    int len = nums.length;
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < len; i++) {
        if (map.containsKey(target - nums[i])) {
            return new int[]{i,map.get(target - nums[i])};
        }
        map.put(nums[i], i);
    }
    return null;
}
```
-> 여기서는 Map을 이용하였고, 내가 처음에 생각했던, target의 값에서 num을 뺀 값을 이용한 풀이이다. 하지만, 내가 해결하지 못했던 예외들을 해결하였다. [3,4,5], target=6과 같은 테스트케이스에 대해서 말이다. 즉, 배열의 요소들에 하나씩 접근하면서 요소를 키 값으로 인덱스를 value 값으로 하였다. 만약 target에서 해당 값을 뺀 값이 존재하면, 두 값의 인덱스를 반환하게 해주었다. 이렇게 함으로서 내가 해결하지 못했던, 6-3=3인 경우와 [0,1],[1,0]이 모두 결과로 나오는 예외들이 한 번에 처리가 되었다. <br>
시간 복잡도 : O(N)
공간 복잡도 : O(N) <br><br>

## 🔶 What I learned: <br>
배열의 요소와 인덱스를 모두 기억해야하는 경우에 Map을 써보도록 해보자!!! 배열의 값을 탐색할 때, 그 값을 기억해야하는 경우에 Map을 사용해보자! <br>
```
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
-> 문자열이 아닌 값도 객체로 사용 가능함 (has를 통해 해당 map에 특정 값 존재하는 지도 확인 가능)
