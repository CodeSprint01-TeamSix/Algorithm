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
