"use strict"

var strBuilder =  (() => {
    var strBuildermaker = (str1,acc) => (str2 => typeof str2 == "string" ? strBuildermaker(str2,acc+str1) : acc+str1)
    return strBuildermaker("","")
})()

var hello = strBuilder("Hello, ");

var kyle = hello("Kyle");

var susan = hello("Susan");

var question = kyle("?")();

var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");

console.log(hello() === "Hello, ");

console.log(kyle() === "Hello, Kyle");

console.log(susan() === "Hello, Susan");

console.log(question === "Hello, Kyle?");

console.log(greeting === "Hello, Susan!");

var x = strBuilder("")
for(let i = 0; i<10000000; i++){
    x = x((i%100000 == 0)?"."+i/100000:"")
}
console.log(x(".")("a")("b")("c")("d")())