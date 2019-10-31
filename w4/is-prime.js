const isPrime = p=>{
    if(!Number.isInteger(p)) return false
    if(p === 0) return false
    if(p === 1) return false
    if(p < 0) return isPrime(-p)
    let i = 2
    while(i <= Math.sqrt(p)){
        if(p%i === 0) return false
        i = i+1
    }
    return true
}
