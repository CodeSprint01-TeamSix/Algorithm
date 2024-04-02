function solution(nums) {
    var answer = 0;
    const pocketBall = {}
    const select = Math.floor(nums.length/2)
    
    nums.forEach(num => {
        if(num in pocketBall) return
            pocketBall[num] = num
        })
    console.log(pocketBall)
    console.log()
    answer = Object.keys(pocketBall).length < select ? Object.keys(pocketBall).length : select
    return answer;
}