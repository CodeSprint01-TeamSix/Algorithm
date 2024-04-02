# [level 1] 같은 숫자는 싫어 - 12906 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12906) 

### 성능 요약

메모리: 82.8 MB, 시간: 48.56 ms

### 구분

코딩테스트 연습 > 스택／큐

### 채점결과

정확성: 71.9<br/>효율성: 28.1<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 04월 01일 02:22:24

### 문제 설명

<p>배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,</p>

<ul>
<li>arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.</li>
<li>arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.</li>
</ul>

<p>배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.</p>

<h5>제한사항</h5>

<ul>
<li>배열 arr의 크기 : 1,000,000 이하의 자연수</li>
<li>배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>answer</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,1,3,3,0,1,1]</td>
<td>[1,3,0,1]</td>
</tr>
<tr>
<td>[4,4,4,3,3]</td>
<td>[4,3]</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1,2<br>
문제의 예시와 같습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

### 스택

가장 마지막에 추가된 요소가 가장 먼저 제거되는 구조

push: 스택의 맨 위에 요소를 추가합니다.
pop: 스택의 맨 위에서 요소를 제거하고 그 요소를 반환합니다.

스택의 사용 예로는 함수 호출 스택, 브라우저의 방문 기록(뒤로 가기), 깊이 우선 탐색(DFS) 등

```javascript
let stack = [];

// push 연산
stack.push("A"); // ["A"]
stack.push("B"); // ["A", "B"]

// pop 연산
console.log(stack.pop()); // "B"
console.log(stack.pop()); // "A"
```


### 큐

가장 먼저 추가된 요소가 가장 먼저 제거되는 구조

enqueue: 큐의 끝에 요소를 추가합니다.
dequeue: 큐의 시작에서 요소를 제거하고 그 요소를 반환합니다.

큐의 사용 예로는 프린터의 인쇄 대기열, 너비 우선 탐색(BFS), 운영 체제의 태스크 스케줄링 등

```javascript
let queue = [];

// enqueue 연산
queue.push("A"); // ["A"]
queue.push("B"); // ["A", "B"]

// dequeue 연산
console.log(queue.shift()); // "A"
console.log(queue.shift()); // "B"
```
