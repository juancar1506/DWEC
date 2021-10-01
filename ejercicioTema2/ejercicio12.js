function suma(a,b) {
 return  a+b;

}
function comprobarNumeros(nums){
    for (let i = 0; i < nums.length; i++) {
        let comprobar = false;
        if (isNaN(nums[i])== false) {
            comprobar = true;
        
        }
    }
    return comprobar;
}

let entrada = prompt("Introduzca los dos numeros que quiera sumar separados por coma:");
let nums = entrada.split(',');

if (comprobarNumeros(nums)==true){
    let salida = suma(parseInt(nums[0]),parseInt(nums[1]));
    window.onload = function(){
        document.getElementById("valor_entrada").innerHTML = entrada;
        document.getElementById("valor_salida").innerHTML = salida;
    }
}

