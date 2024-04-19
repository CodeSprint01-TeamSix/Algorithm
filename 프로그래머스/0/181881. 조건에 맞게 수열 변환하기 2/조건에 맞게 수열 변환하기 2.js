function solution(arr) {
    var answer = 0;
    let current = arr
    
    function transform(nums) {
        return nums.map(item => {
            if(item >= 50 && item %2 === 0) {
                return item / 2;
            } else if (item < 50 && item % 2 !== 0) {
                return item * 2 + 1;
            } else {
                return item
            }
        })
    }
    
    function arraysEqual(cur, nex) {
        if(cur.length !== nex.length) return false;
        for(let i = 0; i < cur.length; i++) {
            if(cur[i] !== nex[i]) return false;
        }
        return true
    }
    
    while (true) {
        const next = transform(current);
        
         //console.log(current)
        if(arraysEqual(current, next)) {
            return answer;
        }
        current = next
        answer++;
    }
   
}