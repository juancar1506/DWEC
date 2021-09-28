
var numeros = prompt("Introduzaca los numeros que va a multiplicar:");

var num = numeros.split(' ',2);

var salida = "";

for (let i = 1; i <= num[1]; i++) {
    salida += `${num[0]} x ${i} = ${num[0]*i} <br/>`;
}
window.onload = function(){
    document.getElementById("valor_entrada").innerHTML = numeros;
    document.getElementById("valor_salida").innerHTML = salida;
}