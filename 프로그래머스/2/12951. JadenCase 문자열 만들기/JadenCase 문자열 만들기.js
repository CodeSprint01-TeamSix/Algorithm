function solution(s) {
    var answer = '';
    answer = s.split(' ').map(word => capitalize(word)).join(' ')
    
    return answer;
}

function capitalize(str) {
    if(str !== str.toLowerCase()) {
        str = str.toLowerCase()
    }
	return str.charAt(0).toUpperCase() + str.slice(1);
}