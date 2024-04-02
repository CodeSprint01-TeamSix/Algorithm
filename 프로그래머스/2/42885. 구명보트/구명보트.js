function solution(people, limit) {
    people.sort((a, b) => (a - b));
    
    let boat = 0;
    let left = 0;
    let right = people.length - 1;
    
    while(left <= right) {
        let sum = people[left] + people[right];
        
        if(sum > limit) {
            right--;
        } else if(sum <= limit) {
            right--;
            left++;
        } 
        boat++;
    }
    return boat;
}