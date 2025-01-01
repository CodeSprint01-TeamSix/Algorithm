function solution(phone_book) {
    let sortArr = phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(sortArr[i+1].startsWith(sortArr[i])) return false;
    }
    
    return true;
}
