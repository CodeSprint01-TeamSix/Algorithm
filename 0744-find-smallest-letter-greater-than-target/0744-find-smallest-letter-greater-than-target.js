/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
//투포인트?
    while (left <= right) { // left 값이 클때 까지 반복
        const mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target) { //letters요소가 target보다 작으면 left + 
            left = mid + 1;
        } else { // 아니면 right -
            right = mid - 1;
        }
    }

    return letters[left % letters.length];
};

