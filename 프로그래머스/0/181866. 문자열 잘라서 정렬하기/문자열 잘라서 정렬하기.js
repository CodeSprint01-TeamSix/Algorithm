// function solution(myString) {
//     let result = [];
//     let newString = myString.split('x');
//     newString.sort();
//     for(let i = 0; i < newString.length; i++) {
//         if(newString[i] !== '') result.push(newString[i])
//     }
//     return result;
// }

function solution(myString) {
    return myString.split('x').filter((e) => e !== '').sort()
}