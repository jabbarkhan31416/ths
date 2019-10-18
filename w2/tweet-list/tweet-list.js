  

window.addEventListener("DOMContentLoaded", event=>{
    var form = document.getElementById("form")
    var textarea = document.getElementById("textarea")
    var button = document.getElementById("button")
    var div = document.getElementById("div")
    var uniqueId = 63391
    var writeTweet = (tweet,id)=>{
        {
            var newDiv = document.createElement("div")
            {
                var attribute = document.createAttribute("id")
                attribute.value = "div"+id
                newDiv.setAttributeNode(attribute)
                console.log("cat")
            }
            {
                tweetText = document.createTextNode(tweet)
                newDiv.appendChild(tweetText)
            }
            {
                var x = document.createElement('button')
                x.classList.add('delete-tweet')
                x.textContent = "x"
                newDiv.appendChild(x)
            }
        }
        div.insertBefore(newDiv,div.firstChild)
    }
    var init = ()=>{
        form.reset()
        if(!localStorage.getItem("tweets"+uniqueId)) localStorage.setItem("tweets"+uniqueId,JSON.stringify({}))
        if(!localStorage.getItem("order"+uniqueId)) localStorage.setItem("order"+uniqueId,JSON.stringify([]))
        var allTweets = JSON.parse(localStorage.getItem("tweets"+uniqueId))
        var order = JSON.parse(localStorage.getItem("order"+uniqueId))
        order.reverse().forEach(n=>{
            writeTweet(allTweets[n],n)
        })
    }
    var submitTweet = ()=>{
        var tweet = textarea.value
        var idNum = Math.floor(Math.random()*(10**5))
        var allTweets = JSON.parse(localStorage.getItem("tweets"+uniqueId))
        var order = JSON.parse(localStorage.getItem("order"+uniqueId))
        while(undefined !== allTweets[idNum]) idNum = idNum + 1
        allTweets[idNum] = tweet
        order.unshift(idNum)
        console.log(idNum)
        writeTweet(tweet,idNum)
        localStorage.setItem("tweets"+uniqueId,JSON.stringify(allTweets))
        localStorage.setItem("order"+uniqueId,JSON.stringify(order))
        form.reset()
    }
    var deleteTweet = e=>{
        e.preventDefault()
        if(e.target.classList.contains("delete-tweet")){
            var allTweets = JSON.parse(localStorage.getItem("tweets"+uniqueId))
            var order = JSON.parse(localStorage.getItem("order"+uniqueId))
            var id = Number(e.target.parentElement.attributes.id.value.slice(3))
            e.target.parentElement.remove()
            allTweets[id] = undefined
            order.splice(order.indexOf(id),1)
            localStorage.setItem("tweets"+uniqueId,JSON.stringify(allTweets))
            localStorage.setItem("order"+uniqueId,JSON.stringify(order))    
        }
    }
    var submitOnEnter = e=>{
        if(e.keyCode == 13) submitTweet()
    }
    init()
    button.onclick = submitTweet
    div.addEventListener('click', deleteTweet)
    textarea.addEventListener("keydown",submitOnEnter)
})