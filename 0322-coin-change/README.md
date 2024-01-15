<h2><a href="https://leetcode.com/problems/coin-change/">322. Coin Change</a></h2><h3>Medium</h3><hr><div><p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>

<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>

<p>You may assume that you have an infinite number of each kind of coin.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
</ul>
</div>

<h1>😎나의 풀이</h1>

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    let count = 0;
    let all = amount;
    coins = coins.sort((a, b) => b - a);
    for(let i = 0; i < coins.length; i++) {
        if(all >= coins[i]) {
           all -= coins[i];
           count++;
        }
        if(all >= coins[i]) i--;
    }
    return all === 0 ? count : -1;
};
```
- 이렇게 풀었을 때 1, 2, 3 케이스 전부 통과했지만 coins = [419,408, 186, 83] amount = 6249인 경우에서 저의 코드는 -1을 return 했지만 답은 20이었습니다.
- 왜 20이 나오나 봤더니 문제를 잘못 풀었습니다.
- 제가 푼 방식은 coins를 내림차순으로 정렬하고 큰 값부터 차례대로 넣고 마지막에 0이 안만들어질 경우 -1을 리턴하는데 문제를 다시 보니 이렇게 푸는 것이 아니었습니다.

<h1>✍️다른 풀이</h1>

```js
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
```

이 풀이는 시간 복잡도가 O 입니다.

1. dp라는 배열을 만들고 모든 값을 무한대(Infinity)로 초기화합니다. dp[i]는 금액 i를 만드는데 필요한 최소 동전 개수를 저장합니다. 초기에는 아무 동전도 사용하지 않았으므로 0을 제외한 모든 금액을 만드는 데 필요한 동전 개수는 무한대라고 가정합니다.
2. 각 동전에 대해, 그 동전의 가치부터 목표 금액까지 순회합니다. 각 금액 j에 대해, j - coins[i] 금액을 만드는 데 필요한 최소 동전 개수(dp[j - coins[i]] + 1)와 현재 저장된 j 금액을 만드는 데 필요한 최소 동전 개수(dp[j]) 중 더 작은 값을 dp[j]에 저장합니다. 이는 j 금액을 만드는 데 필요한 최소 동전 개수를 계속 업데이트하는 것입니다.
3. 모든 동전과 모든 금액에 대해 위의 과정을 거치면, dp[amount]에는 목표 금액을 만드는 데 필요한 최소 동전 개수가 저장됩니다. 만약 dp[amount]의 값이 여전히 무한대라면, 목표 금액을 만드는 방법이 없다는 것이므로 -1을 반환합니다. 그렇지 않다면 dp[amount]를 반환합니다.
