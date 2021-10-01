let sueldo = parseInt(prompt("Introduzca el sueldo:"));
let antiguedad = parseInt(prompt("Introduzca su antiguedad:"));
let sueldoN;
if (sueldo<500 && antiguedad>=10) {
	sueldoN =sueldo*3;
	alert("el sueldo del usuario es: "+sueldoN+" con una antiguedad de "+antiguedad+" años");
}else if(sueldo<500&& antiguedad<10) {
	sueldoN = sueldo*2;
	alert("el sueldo del usuario es: "+sueldoN+" con una antiguedad de "+antiguedad+" años");
}else if (sueldo>=500) {
	sueldoN = sueldo; 
	alert("el sueldo del usuario es: "+sueldoN+" con una antiguedad de "+antiguedad+" años");
}

