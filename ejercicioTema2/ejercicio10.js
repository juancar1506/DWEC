entrada = prompt("Introduce numeros searados por coma.");

var nums = entrada.split(',');

var salida = "NO";
for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == 10) {
        salida = "SI";
    }
}    
window.onload = function(){
    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}