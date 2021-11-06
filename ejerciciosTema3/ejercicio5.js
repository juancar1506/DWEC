function ventanaAnterior(){
let vs = window.open('ejercicio5_PP.html');

let salida= vs.document.getElementById('idEd').value;
window.document.getElementById('idTexto').innerHTML=salida;
}