function solution(rank, attendance) {
    let result = [];
    
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i]) result.push(rank[i]);
    }

    result.sort((a,b) => a - b);

    function findIdx(i) {
        return rank.indexOf(result[i]);
    }
    return findIdx(0) * 10000 + findIdx(1) * 100 + findIdx(2);
}