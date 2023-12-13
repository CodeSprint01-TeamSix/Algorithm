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
</div> <br><br>


<hr>

## 😀 나의 풀이: <br>
<처음 풀이> <br>
```
var maxProfit = function(prices) {
    let profit = 0;
    //중첩 반복문 돌면서, 현재 값 보다 큰 경우 계속 업데이트
    for(let i = 0;i<prices.length;i++){
        for(let j = i;j<prices.length;j++){
            if(prices[j]-prices[i]>profit){
                profit = prices[j]-prices[i];
            }
        }
    }
    return profit;
};
```
-> 비교하는 문제이기에 바로 생각난 풀이는 중첩 반복문 활용해서 크기 비교하게 끔 구현하였는데, 시간 초과가 뜨는 것.... 반복문을 한 번 사용할 수 있게 구현할 방법을 생각해보았다. <br>

<최종 풀이>
```
const maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0]
    
    for (let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i-1])
        profit = Math.max(prices[i]-min, profit)
    }
    
    return profit
};
```
-> 최솟값과 현재값에서 최솟값을 빼야 이익은 최대가 될 것이다. 따라서, 현재 시점에서 그 이전까지의 최솟값을 계속해서 실시간으로 업데이트 시켜나가고, 그에 따른 profit도 실시간으로 업데이트 시켜나가면, 반복문을 한 개만 사용할 수 있다. <br>

--> 시간 복잡도를 O(n^2)에서 O(n)으로 줄였다. <br><br>


## 🔶 What I learned: <br>
: 배열의 값들의 연산결과를 계속해서 업데이트 해나가야하고, 인덱스가 의미가 있다면 dp와 같은 방식의 느낌으로 계속해서 값을 업데이트 시켜나가는 방식으로 해보자!!!!! 중첩 반복만 생각하지말고, 더 나아가서 로직 생각해보자!
