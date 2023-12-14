<h2><a href="https://leetcode.com/problems/climbing-stairs/">70. Climbing Stairs</a></h2><h3>Easy</h3><hr><div><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>
</div> <br><br>

<hr>

## 🌍 DP란<br>
### DP란? <br>
: Dynamic Programming 동적 계획법은 '큰 문제를 작은 문제로 쪼개서 그 답을 저장해두고 재활용' 하는 것으로 '**기억하며 풀기**'라고 할 수 있다. 값을 저장해두고 재활용하므로, 코드의 효율성이 매우 높아짐/ 알고리즘이라기보단 하나의 방법 <br>
### DP 적용 조건 2가지 <br>
1. 겹치는 부분 문제: 동일한 작은 문제들이 반복하여 나타나는 경우 <br>
2. 부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우<br><br>
### DP 문제 해결 과정 <br>
1. DP로 풀 수 있는 문제인지 확인: 해당 문제가 작은 문제들로 이루어진 하나의 함수로 표현될 수 있는 지 판단 (**위의 조건들이 충족되는 문제인지 체크**)<br>
2. 문제의 변수 파악 (state 파악): ex) 피보나치 수열에서는 n번째 숫자 구하는 것이므로 n이 변수/ 문자열 간의 차이를 구할 때에는 문자열의 길이, edit 거리 2가지를 변수<br>
3. 변수 간 관계식 만들기 (점화식) <br>
4. 메모하기 (메모제이션): 변수의 값에 따른 최근의 결과값 저장하는 것으로 보통 **배열**을 쓴다 <br>
5. 기저 상태 파악하기: 가장 작은 문제의 상태를 알아야 한다. 예를 들어, 피보나치 수열에서는 f(0)=0, f(1)=1과 같은 방식이다 <br>
5. 구현하기 <br><br>
### DP 문제를 푸는 2가지 방식 <br>
#### 1. Bottom-up (tabulation) : 반복문 
: 아래에서 부터 계산을 수행하고 누적시켜서 전체 큰 문제를 해결하는 방식/ dp[n]을 구할 때, dp[0]부터 시작하여 반복문을 통해 점화식으로 결과를 내서 dp[n]까지 그 값을 전이시키는 방식
<br>
#### 2. Top-down (memozation-최근값을 기억): 재귀함수 
: 위에서부터 바로 호출을 시작하여 dp[0]까지 내려간 다음 결과 값을 재귀를 통해 전이시켜 재활용하는 방식 <br><br>

* 2가지 방식 중 어느 방식이 더 좋냐는 '**알 수 없다**'. 문제에 따라 다르다. **2가지를 모두 사용하지 못하는 문제도 있다.** 이는 dp문제를 많이 풀어보며 경험적으로 알아낼 수 있다 <br>
* 분할정복은 하위 문제가 중복이 일어나지 않는 경우에, dp는 중복이 일어나는 경우에
<br><br>

## 😀 나의 풀이: <br>
: Bottom-up 방식으로 반복문을 활용해 풀어보았다. <br>
### 1. dp로 풀 수 있는 문제인가? <br>
: 3번째 계단까지 오르는 방법을 생각하기 위해선, 1번째, 2번째 계단까지 오르는 방법의 수를 알아야 한다. 또한, 2번째 조건도 만족한다. 왜냐하면, 3번째 계단까지 오르는 방법의 최적의 결과값은 1번째, 2번째 오르는 최적의 결과값을 통해서 도출할 수 있다. <br>
### 2. 변수 파악 <br>
: n번째 계단까지 오르는 것이므로 변수는 계단의 수인 n이 된다. <br>
### 3. 점화식 <br>
: **f(n) = f(n-1) + f(n-2)** 로 도출해보았다. 한 번에 1개 or 2개의 계단을 오를 수 있다. 따라서, n번째까지 오르기 위해서는, n-1개의 계단을 오르기 위한 방법의 수를 구하면 마지막에는 1칸만 올라가면 되고, n-2개의 계단을 오르기 위한 방법의 수를 구하면 마지막에는 2칸만 올라가면 된다. 따라서 n개의 계단을 오르는 방법의 수는 **'마지막에 1칸 짜리 오르는 방법의 수 f(n-1)+마지막에 2칸 짜리 오르는 방법의 수 f(n-2)'** 로 구해주면 된다. <br>
### 4. 메모제이션 <br>
: f(n)을 구하기 위해서는 그 이전의 값들이 필요하게 된다. 따라서 그 값들은 arr이라는 배열에 저장을 하겠다. <br>
### 5. 기저 상태 파악하기 <br>
: n=2인 경우부터 시작하게 끔하였고, n=0, n=1는 기저 상태로 배열값을 초기화해 처리해주었다. <br>
### 6. 구현하기 
```
var climbStairs = function(n) {
    // n번째는 n-1에서 1개의 스텝만 오르면된다. n-2개에서는 2개짜리 계단을 오르면 된다. 
    let arr = [1, 1];
    for(let i = 2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr);
    return arr[arr.length-1];
};
```
<br><br>

## ⭕ 다른 사람의 풀이: <br>
```
const saveArr = new Array();

var climbStairs = function(n) {

    for(let i=0; i<=n; i++){
        if(i===0 || i===1) saveArr[i] = 1;
        else{
            saveArr[i] = saveArr[i-1]+saveArr[i-2];
        }
    }
    return saveArr[n];
};
```
-> 나와 같은 풀이지만, 기저 상태를 반복 안에서 조건문으로 처리해주었다는 점이 다르다. 
<br><br>

## 🔶 What I learned: <br>
-> **여기서는 재귀함수를 사용하면 시간 초과 오류가 난다!** <br>
-> dp는 최대한 풀이보지 않고, 다른 알고리즘들보다도 여러 번 연습하는 게 필수!!!!!!!!! <br>
-> dp는 n(x)구하는 것이면, n(0)부터 계산값을 저장시켜나가며, n(x)까지 도달하는 느낌으로 생각해보자! 위에 작성한 dp 문제 푸는 순서대로 시도해보자! 
