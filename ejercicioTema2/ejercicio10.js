let entrada = prompt("Introduce numeros searados por coma.");

let nums = entrada.split(',');

let salida = "NO";
for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == 10) {
        salida = "SI";
    }
}    
window.onload = function(){
    document.getElementById("valor_entrada").innerHTML = entrada;
    document.getElementById("valor_salida").innerHTML = salida;
}