/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numObject = {}
    let count = 0;
    let i = 0;
    while(i < nums.length) {
        if(`${nums[i]}` in numObject === false ) {
            //console.log(`객체에 추가되는 ${nums[i]}`)
            numObject[nums[i]] = nums[i]
            i++;
        }  else {
            //console.log(`index${i} - count${count} = ${i - count}`)
            //console.log(`제거 전${nums}`)
            nums.splice(i , 1)
            count += 1;
            //console.log(`제거 후${nums}`)
        }
    }
   
    return nums.length

};