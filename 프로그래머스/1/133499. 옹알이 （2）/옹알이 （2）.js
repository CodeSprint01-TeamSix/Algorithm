function solution(babbling) {
    const repeatedPattern = /(aya|ye|woo|ma)\1/;
    const validPattern = /^(aya|ye|woo|ma)+$/;
    
    return babbling.filter(word => 
        !repeatedPattern.test(word) && validPattern.test(word)
    ).length;
}