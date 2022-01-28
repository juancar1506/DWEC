
    let izquierda=0;
    let arriba=0;

document.addEventListener("keydown",function (evento){
    let direccion = evento.key;
    console.log(direccion)
    switch (direccion) {
        case "ArrowRight":
            izquierda++;
            document.getElementById('caja').style.left = `${izquierda}px`        
            break;
        case "ArrowDown":
            arriba++;
            document.getElementById('caja').style.top = `${arriba}px`
            break;
        case "ArrowLeft":
            izquierda--;
            console.log(izquierda)
            document.getElementById('caja').style.left = `${izquierda}px`
            break;
        case "ArrowUp": 
            arriba--;
            document.getElementById('caja').style.top =`${arriba}px`
            break;       
        default:
            alert("Ha pulsado la tecla "+direccion)
            break;
    }
})