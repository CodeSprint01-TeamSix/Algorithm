function solution(elements) {
    var answer = 0;
    // [7,9,1,1,4] 선형 배열로 봤을 때는 4 다음에 7인지 모르고 그림으로 봤을 때 알 수 있기 때문에 
    //concat 을 사용해서 반복되는걸 표현해주기 위해서 elements배열을 2배로 확장함
    const extendsElements = elements.concat(elements) 
    const nums = new Set();
    for(let i = 0; i < elements.length; i++) {
        for(let j=1; j <= elements.length; j++) {
            let sum = 0
            for(let k = i; k < i + j; k++) {
                sum += extendsElements[k]
                  //console.log(k, elements[k])
            }
            nums.add(sum)
        }
    }
   // console.log(nums)
    answer = nums.size
    return answer;
}