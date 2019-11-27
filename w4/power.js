
const max2Power = n=>{
    let exp = 0
    let pow = 1
    while(2*pow <= n){
        pow = 2*pow
        exp = exp+1
    }
    return [exp,pow]
}
