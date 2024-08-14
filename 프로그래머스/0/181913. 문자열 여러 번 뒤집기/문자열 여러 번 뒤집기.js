function solution(my_string, queries) {
    my_string = my_string.split('')
    
    for(let i = 0; i < queries.length; i++) {
        let [start, end] = queries[i];
        
        let slice = my_string.slice(start, end+1).reverse();

        for(let j = 0; j < slice.length; j++) {
            my_string[start+j] = slice[j];
        }
    }
    return my_string.join('')
}