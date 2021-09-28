
//Al introdicir los datos el formato sera 0.0
function obtenerCalificacion(dato){
if (dato>=0.0 && dato<3.0) {
    mensaje ="Muy deficiente";
}else if (dato>=3.0 && dato<5.0) {
    mensaje="Insuficiente";
}else if (dato>=5.0 && dato<6.0){
    mensaje ="Bien";
}else if (dato>=6.0 && dato<9.0){
    mensaje ="Notable";
} else if(dato>=9.0 && dato<=10){
    mensaje="Sobresaliente";
}else if(dato<0.0 || dato>10){
    mensaje = "fuera de rango";
}
window.onload = function(){
    document.getElementById("valor_entrada").innerHTML = dato;
    document.getElementById("valor_salida").innerHTML = mensaje;
    }      
}

var dato = parseFloat(prompt("Escriba el numero que qquiera anlizar entre 0 y 10 (0.0):"));
var mensaje = "";
if (isNaN(dato) == false){
    obtenerCalificacion(dato);
}else{
    alert("Error, no es un numero");
}