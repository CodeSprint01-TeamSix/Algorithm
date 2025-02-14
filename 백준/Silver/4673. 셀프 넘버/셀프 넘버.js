const MAX = 10000;
let set = new Set();

function d(n) {
    let sum = n;
    
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

for (let i = 1; i <= MAX; i++) {
    set.add(d(i));
}

for (let i = 1; i <= MAX; i++) {
    if (!set.has(i)) {
        console.log(i);
    }
}