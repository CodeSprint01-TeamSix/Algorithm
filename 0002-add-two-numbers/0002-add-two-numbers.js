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
