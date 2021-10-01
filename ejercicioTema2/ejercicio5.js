function calcularSueldo(a,b) {

	if (a<500 && b>=10) {
		return a*3;
	}else if(sueldo<500&& b<10) {
		return a*2;
	}else if (a>=500) {
		return a; 
	}
}
let sueldo = parseInt(prompt("Introduzca el sueldo:"));
let antiguedad = parseInt(prompt("Introduzca su antiguedad:"));

let entrada = `${sueldo}<br/>${antiguedad}`;
let salida = calcularSueldo(sueldo,antiguedad);

window.onload = function(){
	document.getElementById("valor_entrada").innerHTML = entrada;
	document.getElementById("valor_salida").innerHTML = salida;
}

