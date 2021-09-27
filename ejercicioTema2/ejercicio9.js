do{
var x = parseInt(prompt("Introduzaca el numero que va a multiplicar:"));
}while(x<-50 && x>50);

do{
var y = parseInt(prompt("Introduzca hasta que numero quiere multiplicarlo:"));
}while(y<1 && y>20);

for (let i = 1; i < y; i++) {
    alert(x+" x "+i+" = "+(x*i));
}