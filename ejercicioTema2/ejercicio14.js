function perimetroRectangulo(a,b) {
    return 2*(a+b);
}
let entrada = prompt("Introduzca los numeros separados por coma:");
let nums = entrada.split(',');
let salida = perimetroRectangulo(parseFloat(nums[0]),parseFloat(nums[1]));
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }