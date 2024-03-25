# [level 2] 뒤에 있는 큰 수 찾기 - 154539 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/154539) 

### 성능 요약

메모리: 128 MB, 시간: 14.45 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 03월 22일 18:30:05

### 문제 설명

<p>정수로 이루어진 배열 <code>numbers</code>가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.<br>
정수 배열 <code>numbers</code>가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>4 ≤ <code>numbers</code>의 길이 ≤ 1,000,000

<ul>
<li>1 ≤ <code>numbers[i]</code> ≤ 1,000,000</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numbers</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[2, 3, 3, 5]</td>
<td>[3, 5, 5, -1]</td>
</tr>
<tr>
<td>[9, 1, 5, 3, 6, 2]</td>
<td>[-1, 5, 6, 6, -1, -1]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
2의 뒷 큰수는 3입니다. 첫 번째 3의 뒷 큰수는 5입니다. 두 번째 3 또한 마찬가지입니다. 5는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [3, 5, 5, -1]이 됩니다.</p>

<p>입출력 예 #2<br>
9는 뒷 큰수가 없으므로 -1입니다. 1의 뒷 큰수는 5이며, 5와 3의 뒷 큰수는 6입니다. 6과 2는 뒷 큰수가 없으므로 -1입니다. 위 수들을 차례대로 배열에 담으면 [-1, 5, 6, 6, -1, -1]이 됩니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges


<h1>😎나의 풀이</h1>

### 첫번째 풀이 실패 (20, 21, 22, 23번 테스트에서 실패(시간 초과)가 떴다)
```js
function solution(numbers) {
    let answer = []
    
    for(let i = 0; i < numbers.length; i++) {
        let found = false;
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] < numbers[j]) {
                answer.push(numbers[j]);
                found = true;
                break;
            }
        }
        if(!found) answer.push(-1)
    }
    return answer;
}
```

### 두번째 풀이 실패 (20, 21, 22, 23번 테스트에서 실패(시간 초과)가 떴다)
```js
function solution(numbers) {
    let answer = []
    
    for(let i = 0; i < numbers.length; i++) {
        let num = -1;
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] < numbers[j]) {
                num = numbers[j]
                break;
            }
        }
        answer.push(num);
    }
    return answer;
}
```

### 세번째 풀이 실패 (20, 21, 22, 23번 테스트에서 실패(시간 초과)가 떴다)
```js
function solution(numbers) {
    let answer = Array(numbers.length).fill(-1);
    
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] < numbers[j]) {
                answer[i] = numbers[j];
                break;
            }
        }
    }
    return answer
}
```
