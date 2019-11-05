const isLeapYear = x => (
    x%4 !== 0 ? false :
    x%100 === 0 ?
        x%400 === 0 ? true : false :
    true
)

//test
console.log([3,5,8,44,84,100,252,300,400,600,800,1000].map(x=>x+"--"+isLeapYear(x)+"/n"))