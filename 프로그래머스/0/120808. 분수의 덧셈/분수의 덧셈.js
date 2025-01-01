function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let denom = (denom1 * denom2) / gcd(denom1, denom2);
    let newNumer1 = numer1 * (denom / denom1);
    let newNumer2 = numer2 * (denom / denom2);
    
    let divisor = gcd(newNumer1 + newNumer2, denom);
    
    return [(newNumer1 + newNumer2)/ divisor, denom/ divisor];
}