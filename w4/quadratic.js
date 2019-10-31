//input in form of c + bx + ax^2
const quadratic = (c,b,a=1)=>{
    const d = Math.sqrt(b*b - 4*a*c)
    return [(-b + d)/(2*a), (-b - d)/(2*a)]
}