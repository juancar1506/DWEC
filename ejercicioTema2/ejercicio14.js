function perimetroRectangulo(a,b) {
    return 2*(a+b);
}
var entrada = prompt("Introduzca los numeros separados por coma:");
var nums = entrada.split(',');
var salida = perimetroRectangulo(parseFloat(nums[0]),parseFloat(nums[1]));
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }