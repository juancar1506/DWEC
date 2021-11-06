let fin = true;
let id = 0;
function Fecha(){
    let hoy = new Date();
    let formTime = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
    return document.title=`La hora es: ${formTime}`;
}        
    

function parar() {
    fin=!fin;
    if(!fin) {
        id = setInterval(Fecha,2000);
    }else{
        clearInterval(id);
    document.title ='--:--:--';
    }
    document.getElementById("boton").value=(fin)?"Reanudar el reloj":"Parar el reloj";
   
}



