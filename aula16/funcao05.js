//recursividade 
function fatoreal(n) {
    if(n==1) {
        return 1
    }else {
        return n * fatoreal(n-1)
    }
}

console.log(fatoreal(5))