setTimeout(() => {
    window.onmousemove = e => handleOnMove(e);
    
    window.ontouchmove = e => handleOnMove(e.touches[0]);
    
}, 3500);
const images = document.getElementsByClassName("image")

let Index = 0

last = {x:0,y:0}
const activate = (img,x,y) =>{
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.zIndex= Index;

    img.dataset.status = "active"

    last = {x,y}
}

const lengthfromend = (x,y) =>{
    return Math.hypot(x - last.x, y - last.y)
}

window.handleOnMove = (e)=>{

    if(lengthfromend(e.clientX,e.clientY) > (window.innerWidth/20))
    {
        const first = images[Index % 10],
        tail = images[(Index-5)%10]
    
        activate(first, e.clientX, e.clientY)
        if(tail)
        tail.dataset.status = "inactive"
    

        Index++
    }

    
    
}
