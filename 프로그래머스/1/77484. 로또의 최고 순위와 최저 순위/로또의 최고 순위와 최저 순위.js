function solution(lottos, win_nums) {
    const unknown =lottos.filter(e => e === 0).length;  // 0의 갯수
    const correct = lottos.filter(e => win_nums.includes(e)).length; // 맞은 숫자 갯수

    let maxRank = Math.min(7 - (unknown + correct), 6);
    let minRank = Math.min(7 - correct, 6);
    
    return [maxRank, minRank]
}