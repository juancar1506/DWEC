var sueldo = parseInt(prompt("Introduzca el sueldo: ","1"));
var antiguedad = parseInt(prompt("Introduzca su antiguedad: ","1"));
var sueldoN;
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

