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

<h1>😎나의 풀이</h1>

```js
배열로 생각하고 풀다가 실패하였고 다른 사람의 풀이를 보다가 연결 리스트 풀이를 처음 봤습니다.
```

<h1>✍️다른 사람 풀이</h1>

```js
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
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Create a dummy node to simplify the code.
    let current = dummyHead; // Initialize a current pointer to the dummy node.
    let carry = 0; // Initialize a variable to store the carry value.

    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10); // Calculate the carry for the next iteration.
        current.next = new ListNode(sum % 10); // Create a new node with the current digit.

        current = current.next; // Move the current pointer to the next node.

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // If there is a carry after processing all digits, add it as a new node.
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the result, skipping the dummy node.
}
```
1. 결과 연결 목록을 추적하기 위해 dummyHead 노드와 current 노드를 초기화합니다.
2. carry 0으로 초기화합니다.
3. 두 입력 연결 목록을 동시에 탐색합니다.
4. 각 단계에서 carry와 함께 current 노드 값의 합을 계산합니다.
5. 다음 반복에 대한 carry를 합계/10으로 계산합니다.
6. 값 합계가 % 10인 새 노드를 생성하고 이를 결과 목록에 추가합니다.
7. 두 입력 목록 모두에서 다음 노드로 이동합니다.
8. 두 입력 목록의 모든 숫자를 처리할 때까지 4-7단계를 반복합니다.
9. 루프 후에도 여전히 carry가 남아 있으면 carry를 값으로 사용하여 추가 노드를 만들고 결과 목록에 추가합니다.
10. 결과 연결리스트의 선두를 나타내는 더미 노드의 다음 노드를 반환합니다.
