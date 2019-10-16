window.addEventListener("DOMContentLoaded", event=>{
    var form = document.getElementById("form")
    var textarea = document.getElementById("textarea")
    var button = document.getElementById("button")
    var div = document.getElementById("div")
    var uniqueId = 63391
    var writeTweet = t=>{

    }
    var init = ()=>{
        form.reset()
        if(!localStorage.getItem("tweets"+uniqueId)) localStorage.setItem("tweets"+uniqueId,JSON.stringify({}))
        if(!localStorage.getItem("order"+uniqueId)) localStorage.setItem("order"+uniqueId,[])
        var allTweets = JSON.parse(localStorage.getItem("tweets"+uniqueId))
        var order = JSON.parse(localStorage.getItem("order"+uniqueId))
        order.reverse().forEach(n=>writeTweet(allTweets[n]))
    }
    var findtweet = idNum=>{

    }
    var submitTweet = ()=>{
        var tweet = textarea.value
        var idNum = Math.floor(Math.random*Math.pow(10,5))
        var allTweets = JSON.parse(localStorage.getItem("tweets"+uniqueId))
        var order = JSON.parse(localStorage.getItem("order"+uniqueId))
        while(undefined !== allTweets[idNum]) idNum = idNum + 1
        allTweets[idNum] = tweet
        order.unshift(idNum)
        writeTweet(tweet)
        localStorage.setItem("tweets"+uniqueId,JSON.stringify(allTweets))
        localStorage.setItem("order"+uniqueId)

    }
    var deleteTweet = n=>{
        
    }
})