function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length -1;
    
    people = people.sort((a,b) => a-b)
    //console.log(people)
    while(left <= right) {
        //console.log(`${people[left]} + ${people[right]} 좌표 left ${left} , right ${right}`)
        if(people[left] + people[right] > limit) {
            right -= 1
        } else if(people[left] + people[right] <= limit) {
            left += 1;
            right -= 1;
        }
        answer += 1
    }
    
    return answer;
}