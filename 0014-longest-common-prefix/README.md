<h2><a href="https://leetcode.com/problems/longest-common-prefix/">14. Longest Common Prefix</a></h2><h3>Easy</h3><hr><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>""</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>
</div> <br><br>

<hr>

### 🍎 다시 풀어보기

## 😀 나의 풀이: <br>
```
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j of strs) {
      if (j[i] != strs[0][i]) {
        return j.slice(0, i);
      }
    }
  }

  return strs[0];
};
```
-> 첫 번째 단어를 기준으로, 배열 내의 단어들을 돌면서 첫 글자부터씩 검사한다. 그래서 다른 값이 나오면 slice 함수를 통해서, 그 이전 값 까지만 반환한다. 만약, 모든 반복문이 끝날 때까지, 반환이 되지 않은 경우 모든 단어가 같다는 뜻이므로, 해당 첫 번째 문자열 자체를 반환한다. <br>
-> 처음엔 반복문의 순서를 반대로 두었다. 한 단어 내에서 모두 검사하고, 다음 단어로 넘어가게끔. 이렇게 하니까 알고리즘이 굉장히 복잡해졌고, 해당 글자들 먼저 반복하자라는 생각에 착안해서, 한 단어 모두 검사를 끝내야한다는 것에서 벗어나서 코드를 완성하였다.
<br><br>

## ⭕ 다른 사람의 풀이: <br>
```
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let word of strs) {
        while (word.indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }

    return prefix;
};
```
-> 첫번째 문자열을 기준으로, substring으로 하나씩 줄어들게 된다. 즉, 일치할 때까지 뒤에서부터 하나씩 줄어드는 것. (indexof가 0이라는 것은 해당 문자열이 존재하는 것. 일치해짐) <br>
-> 즉, 첫번째 문자열을 기준으로 단어를 하나씩 돌면서, 일치할 때까지, 뒤의 문자를 하나씩 줄이고 다음 단어로 넘어가서 다시 공통 부분 prefix 부분이 일치해질 때까지 뒤ㅢ 문자를 하나씩 제거한다. <br><br>

## 🔶 What I learned: <br>
- substring: 시작 인덱스부터, 종료 이전까지의 인덱스에 해당하는 부분 문자열 반환 <br>
```
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```
<br>

-indexof: string.indexOf(searchvalue, position)-> string에서 searchvalue라는 특정 문자열을 찾고 그 첫번째 인덱스를 반환해줌! 없으면 -1 return!!!!
<br>

indexof랑 substring 함수를 많이 이용하자!!
