let fin = true;
let id = 0;
function Fecha(){
    let hoy = new Date();
    let formTime = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
     document.title=`La hora es: ${formTime}`;
     
     document.getElementById('impFecha').innerHTML=`La hora es: ${formTime}`;
}        
    

function parar() {
    fin=!fin;
    if(!fin) {
        id = setInterval(Fecha,1000);
       
    }else{
        clearInterval(id);
    document.title ='La hora es: --:--:--';
    document.getElementById('impFecha').innerHTML='La hora es: --:--:--';
    }
    document.getElementById("boton").value=(fin)?"Reanudar el reloj":"Parar el reloj";
   
}


