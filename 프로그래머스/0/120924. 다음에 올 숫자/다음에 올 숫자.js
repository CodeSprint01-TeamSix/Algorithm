function solution(common) {
    for(let i = 0; i < common.length; i++) {
        if(common[i+1] - common[i] === common[i+2] - common[i+1]) {
            return common[common.length - 1] + (common[i+1] - common[i]);
        } else {
            return common[common.length - 1] * (common[i+1] / common[i]);
        }
    }
}