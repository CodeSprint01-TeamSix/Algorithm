function solution(people, limit) {
    let result = 0;
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a,b) => a - b);
    
    while(right > left) {
        if(people[left] + people[right] > limit) {
            right--;
        } else {
            result++;
            left++;
            right--;
        }
    }
    return people.length - result;
    
}