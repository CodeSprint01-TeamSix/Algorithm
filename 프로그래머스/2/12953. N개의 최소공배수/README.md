# [level 2] N개의 최소공배수 - 12953 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12953#) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.20 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 03월 19일 11:52:24

### 문제 설명

<p>두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요. </p>

<h5>제한 사항</h5>

<ul>
<li>arr은 길이 1이상, 15이하인 배열입니다.</li>
<li>arr의 원소는 100 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[2,6,8,14]</td>
<td>168</td>
</tr>
<tr>
<td>[1,2,3]</td>
<td>6</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

### 처음에 작성한 풀이

![화면 캡처 2024-03-19 114658](https://github.com/namminimi/Algorithm/assets/111848336/ff005325-a99d-4fd2-82ea-e3d7e82f03a1)

![image](https://github.com/namminimi/Algorithm/assets/111848336/dba6fe02-5302-40d9-89b4-026e0560653c)

간단하게 최소공배수만 구하는 방법으로 했다가 
모든 테스트 코드는 통과했지만
최종 3, 6, 7번은 통과하지 못함


유클리드 호제법 

![image](https://github.com/namminimi/Algorithm/assets/111848336/706f0852-e1a8-4e07-b422-84517d80d2cf)


https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0#%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%ED%98%B8%EC%A0%9C%EB%B2%95%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B5%AC%ED%98%84

https://velog.io/@corone_hi/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%ED%98%B8%EC%9E%AC%EB%B2%95


재귀함수 https://velog.io/@tnstjd120/%EC%9E%AC%EA%B7%80-%ED%95%A8%EC%88%98recursive-function%EC%99%80-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98callback-function



