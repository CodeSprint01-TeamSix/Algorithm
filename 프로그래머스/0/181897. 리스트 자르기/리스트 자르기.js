function solution(n, slicer, num_list) {
    var answer = [];
    const [start, end, space] = slicer;
    switch(n) {
        case 1:
            answer = num_list.slice(0, end+1)
            break;
        case 2:
            answer = num_list.slice(start)
            break;
        case 3:
            answer = num_list.slice(start, end+1)
            break;
        case 4:
            const short_list = num_list.slice(start, end+1)
            console.log(short_list)
            answer = short_list.filter((list, index) => index % space === 0)
            break;
    }
    return answer;
}