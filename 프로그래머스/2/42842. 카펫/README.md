# [level 2] 카펫 - 42842 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42842) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 03월 20일 13:53:16

### 문제 설명

<p>Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1ebb809-f333-4df2-bc81-02682900dc2d/carpet.png" title="" alt="carpet.png"></p>

<p>Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.</p>

<p>Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.</li>
<li>노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.</li>
<li>카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>brown</th>
<th>yellow</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>2</td>
<td>[4, 3]</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>[3, 3]</td>
</tr>
<tr>
<td>24</td>
<td>24</td>
<td>[8, 6]</td>
</tr>
</tbody>
      </table>
<p><a href="http://hsin.hr/coci/archive/2010_2011/contest4_tasks.pdf" target="_blank" rel="noopener">출처</a></p>

<p>※ 공지 - 2020년 2월 3일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2020년 5월 11일 웹접근성을 고려하여 빨간색을 노란색으로 수정하였습니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

### 처음 풀이
약수 값을 이용해서 가로 세로의 값을 가져오려고했지만 

4, 6, 7 번 통과를 하지 못했다

![image](https://github.com/namminimi/Algorithm/assets/111848336/29a010f1-f0b4-43f9-9f7c-bcc6ce84c8cb)

어떤값이 통과를 하지 못하는가 봤더니 brown + yellow 값이 24일 때 통과를 하지 못했다

[18, 6]  => [6, 4] (x)

[18, 6] => [8, 3] (0)

그림을 그려서 비교해보았다 (그림이 아에 다름)

8 * 3

![KakaoTalk_20240320_140056112](https://github.com/namminimi/Algorithm/assets/111848336/9a559366-43bc-4c3b-a5d9-3674f22c764d)

6 * 4(색칠한곳이 이상한데 안에 4칸만 색칠됨) 

![KakaoTalk_20240320_140056112_01](https://github.com/namminimi/Algorithm/assets/111848336/59156e0d-0414-4aa6-9268-6fbb7b72760f)


아래 링크를 참고해서 다시확인해봤더니
몇가지 조건을 확인해야함

- 카펫의 가로 세로 최소 길이는 3부터 시작    << 가로 세로 최소 3부터해야 노란색 칸을 넣을수 있음
- x(가로) * y(세로)
- (brown + yellow) / x = y
- (x-2) * (y-2) === yellow                << 현재 문제일 때는 가로 세로 -2 칸씩 빼야 노란색 칸 값이 나옴 

### 참고 링크 :  https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EC%B9%B4%ED%8E%AB
