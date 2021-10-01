var esBisiesto = anyo => ((anyo%4 == 0) && ((anyo%100 !=0) || (anyo%400)==0)) ? 1:0;

var entrada = parseInt(prompt("Introduzca una fecha"));

var salida = esBisiesto(entrada);
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }