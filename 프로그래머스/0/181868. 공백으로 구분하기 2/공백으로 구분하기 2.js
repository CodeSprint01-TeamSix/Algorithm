function solution(my_string) {
    // console.log(my_string.trim().split(' ').filter(e => e !== ''))
    // console.log(my_string.trim().split('').filter(e => e !== ''))
    return my_string.split(' ').filter(e => e !== '')
}