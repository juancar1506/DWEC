function cambiarColor(evento){
    let R = parseInt(Math.random()*255)
    let G = parseInt(Math.random()*255)
    let B = parseInt(Math.random()*255)
    console.log(evento.target.type)
    if(evento.target.type=="submit"){
     document.body.style.background = `rgb(${R},${G},${B})`
    }else{
    document.body.style.background = "#fff";
    }
}    
    
    document.addEventListener("click",cambiarColor)