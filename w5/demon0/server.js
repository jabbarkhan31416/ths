const http = require("http")
const path = require("path")
console.log("dirname***",__dirname,"***end")
http.createServer((request,response)=>{
    response.end("hello world,\n -jabbar")
    //console.log(request.params)
}).listen(3000)