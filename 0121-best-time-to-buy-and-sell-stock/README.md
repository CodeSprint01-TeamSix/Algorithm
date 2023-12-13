<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">121. Best Time to Buy and Sell Stock</a></h2><h3>Easy</h3><hr><div><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>

<p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>

<p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

### 나의 풀이

```javascript
var maxProfit = function(prices) {
    //시간초과
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            value = prices[j] - prices[i]
            max = max < value ? value : max 
        }
    }
};
```

- 받아오는 배열 값이 엄청 많으면 시간 초과가 뜬다

![image](https://github.com/namminimi/LeetCode/assets/111848336/cb06a953-f360-4e27-b176-f64fce59ba86)


### 다른 사람 풀이 참고

```javascript
var maxProfit = function(prices) {
    // 최저 값이 들어가있는 index필요
    // 최저 index 값이 최고 index보다 작으면 두값의 차를 구할수 있음
    
    let max = 0;
    let value;
    for(let i = 0; i < prices.length; i++) {
        if(value === undefined || value > prices[i]) {
            value = prices[i] //배열 요소 하나씩 돌면서 최소값을 찾는다
        } else {
            if(max < prices[i] - value) {
                max = prices[i] - value;  //각 요소 - value값 계산
            }
        }
    }
   return max
};

코드 전체적인 풀이
prices = [7,1,5,3,6,4]

반복문 시작
i=0 {
  첫번째 조건: true || undefiend > 7  == 조건 true
   value = 7 할당 
}

i=1 {
  첫번째 조건: false || 7 > 1 == 조건 true
  value = 1 할당
}

i=2 {
   첫번째 조건: false || 1 > 5 == 조건 false
   두번째 조건: 0 < 5 - 1(4) == 조건 true
    max = 5 - 1   == 4 할당
}

i=3 {
    첫번째 조건: false || 1 > 3 == 조건 false
   두번째 조건: 4 < 3 - 1(2) == 조건 false
    재할당값 없음
}
현재 max = 4, value = 1
i=4 {
   첫번째 조건: false || 1 > 6 == 조건 false
   두번째 조건: 4 < 6 - 1(5) == 조건 true 
    max = 6 - 1   == 5 할당
}
현재 max = 5, value = 1
i=5 {
  첫번째 조건: false || 1 > 4 == 조건 false
  두번째 조건: 4 < 4 - 1(3) == 조건 false 
  재할당 없음	
}

return 값은 max = 5

```

### 참고 블로그
https://bohyeon-n.github.io/deploy/algorithm/besttimetobuyandsellstock.html
