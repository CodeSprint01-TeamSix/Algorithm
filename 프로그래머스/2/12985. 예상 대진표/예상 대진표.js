function solution(n,a,b) {
    let cnt = 0;
    
    for(let i = 0; i < n; i++) {
        if(a === b) {
            return cnt;
        } else {
            a = Math.ceil(a / 2);
            b = Math.ceil(b / 2);
            cnt++;
        }
    }
}

// 2 / 6

// 1 2   3 4   5 6   7 8
// 2       4     6     8
//     2            6
// 3번