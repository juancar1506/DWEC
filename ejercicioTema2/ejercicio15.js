function esPrimo(num){
    if (num>1) {
        for (let i = 2; i <num ; i++) {
            if(num%i==0){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
} 

var entrada = parseInt(prompt("Introduzca un numero: "));

var salida = esPrimo(entrada);
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }