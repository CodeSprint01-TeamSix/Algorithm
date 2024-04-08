//하나씩 옷장에 등록해준다
//다른 부위의 의상은 조합해서 넣을 수 있다
//중복된 옷은 등록 불가 
function solution(clothes) {
    var answer = 1;
    const clothes_list = new Map()
    
    clothes.forEach(list => {
        if(clothes_list.has(list[1])) {
            clothes_list.set(list[1], clothes_list.get(list[1])+1)
        }else {
            clothes_list.set(list[1], 1)
        }
    })
    //조합 문제 공식 (얼굴에 해당하는 옷이 2개, 상의에 해당하는 옷이 1개 있을 경우 각각 옷을 입지 않는 경우를 포함해 
    //(2+1) * (1+1) = 6가지 경우. 여기서 모두 옷을 입지 않는 1가지 경우를 빼서 5가지 경우)
    for(let [key, value] of clothes_list) {
        answer *= value + 1
    }
    console.log(answer)
    answer -= 1
    return answer;
}