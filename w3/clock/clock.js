

window.addEventListener("DOMContentLoaded", e=>{
    const canvas = document.getElementsByTagName("canvas")[0]
    const ctx = canvas.getContext("2d")
    const resizeDraw = ()=>{
        const width = window.innerWidth
        const height = window.innerHeight
        const size = Math.min(width,height)
        canvas.setAttribute("width",size)
        canvas.setAttribute("height",size)
        const date = new Date()
        const hour = date.getHours()%12*5
        const minute = date.getMinutes()
        const second = date.getSeconds()
        const drawHand = (angle,length,thickness,colour)=>{
            length1 = length*size/2*0.8
            angle1 = Math.floor(angle)*Math.PI/30
            ctx.lineWidth = thickness*size/100
            ctx.strokeStyle = colour
            ctx.lineCap = "round"
            ctx.beginPath()
            ctx.moveTo(size/2, size/2)
            ctx.lineTo(
                size/2 + length1*Math.sin(angle1),
                size/2 - length1*Math.cos(angle1)
            )
            ctx.stroke()
        }
        drawHand(hour, 0.5, 2, "black")
        drawHand(minute, 0.8, 1.6, "brown")
        drawHand(second, 1, 1, "red")
        for(let i = 0; i < 4; i = i+1){
            ctx.beginPath()
            ctx.arc(
                size/2 + size/2*0.9*Math.sin(i*Math.PI/2),
                size/2 + size/2*0.9*Math.cos(i*Math.PI/2),
                size/42,
                0,
                2*Math.PI
            )
            ctx.fill()
        }
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.arc(size/2, size/2, size/36, 0, 2*Math.PI)
        ctx.fill()
    }
    window.setInterval(resizeDraw,1000)
})