const iterations = 4
const max2Power = n=>{
    let exp = 0
    let pow = 1
    while(2*pow <= n){
        pow = 2*pow
        exp = exp+1
    }
    return [exp,pow]
}

const log0 = (n,it)=>{
    if(n <= 0) throw Error("expected a positive number")
    else if(n < 1) return -log0(1/n)
    else if(n == 1) return 0
    else{
        const [exp,pow] = max2Power(n)
        const mant = n/pow
        return it <= 0 ? mant : exp + log0(mant**1000, it-1)/1000
    }
}

const log = (n,b=2) => log0(n,iterations) / log0(b,iterations)
