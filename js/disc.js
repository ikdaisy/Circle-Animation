document.getElementById("body").addEventListener("mousemove",(event)=>{
    x=event.clientX;
    // console.log(x);
    y=event.clientY;
    // console.log(y);
    document.getElementById("disc").style.left=x+"px"
    document.getElementById("disc").style.top=y+"px"
})
   
    
    
