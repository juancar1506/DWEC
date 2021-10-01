let esBisiesto = anyo => ((anyo%4 == 0) && ((anyo%100 !=0) || (anyo%400)==0)) ? 1:0;

let entrada = parseInt(prompt("Introduzca una fecha"));

let salida = esBisiesto(entrada);
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }