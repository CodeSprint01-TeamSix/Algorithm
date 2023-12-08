<h2><a href="https://leetcode.com/problems/add-two-numbers/">2. Add Two Numbers</a></h2><h3>Medium</h3><hr><div><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">
<pre><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 9</code></li>
	<li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
</ul>
</div>

### 🤔나의 풀이(참고자료 해석)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //l1 = [2,4,3]
    //l2 = [5,6,4]
   let sum = 0;
   const arr = [];
   let digit = 0; 
   // digit의 역할은 각 값을 더했을때 9이상인 수가 나오면 ex) 10이면 0은 arr배열에 담고
   //1은 다음 숫자에 추가해야하기때문에 추가해야할 값을 담음

    //val은 현재 값을 나타내고
    //next는 다음 값들을 나타냄 

    //console.log(`l1.val는 ${l1.val}`)
    //l1.val= [2, 4, 3] 중에 현재 2를 나타내고있음(l2도 마찬가지)
    //console.log(`l1.next는 ${l1.next}`)
    //console.log(l1.next)
    //l1.next= 다음 숫자들 [4,3]

   while (l1 || l2 || digit ) {
     //(l1 || l2 || digit) l1, l2 를 console.log에 찍어보면 값이 있기때문에 위 조건은 true로 나온다
     // 다 false 나오면 반복문 멈춤
      sum = digit + (l1?.val ?? 0) + (l2?.val ?? 0);
      //console.log(sum)
      //console.log(digit)
      //sum = 0 + (l1.val이 null 이면 0 출력 근데 값이 있기때문에 처음 값 2 출력) + (l1과 마찬가지로 5출력)
      //val요소로 출력된 값들을 반복하면서 더해줌 l1= 2 + l2=5  = 7, l1=4 + l2=6  = 10 , l1= 3 + l2=4  = 7 인데
      //나온 숫자를 역으로 나와야하고 중간값이 9이상인 값이 나왔기 때문에sum % 10을 해줘서 나머지값인 0은 arr에 담기고
      // Math.floor(sum / 10) 을 해서 1은 digit에 담김
      arr.push(sum % 10);
      digit = Math.floor(sum / 10);
      l1 = l1?.next; 
      l2 = l2?.next;
      //l1, l2 노드리스트값이 null이나 undefind 나올때까지 반복해줘야하기때문에 다음값을 각 l1, l2에 담는다
      // 노드리스트 배열 끝까지 반복 
   }
   arr.reverse();
   //반복문이 끝나고 arr 배열을 [7, 0, 8]을 역으로 바꾼다

   // 완료 조건이 다시 연결된 리스트로 반환이기때문에
   // ListNode를 생성한다....
   let obj = {};
   let ans = obj;

    // arr.length는 3
   for (let i = arr.length; i >= 0; i--) {
      obj.next = new ListNode(arr[i]);
      //console.log( obj.next) 
      //[0][7][0][8], 여기서 신기한게 노드리스트는 push하지 않아도 [0,7,0,8] 이렇게 추가된다..?
      obj = obj.next;
   }
    
   //console.log(ans) //{ next: [0,7,0,8] }
   //ans.next 객체안에서 next속성을 사용하면 [7,0,8]
   return ans.next.next;
};

```

![img](https://github.com/namminimi/LeetCode/assets/111848336/f3d78cac-e1f1-436f-9161-89c9d18f5169)

참고자료1: https://www.freecodecamp.org/korean/news/implementing-a-linked-list-in-javascript/   <br>
참고자료2: https://nevertrustbrutus.tistory.com/506
