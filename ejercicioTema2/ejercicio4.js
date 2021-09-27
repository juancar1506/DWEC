//Entrada y declaracion de los datos, comprobamaos que los datos esten bien introduidos.
do {
var mes = parseInt(prompt("Introduzca el valor del mes"));
}while(mes>12);
if (mes ==1 || mes==3|| mes==5|| mes==7|| mes==8|| mes==10|| mes==12) {
    do{
    var dia = parseInt(prompt("Introduzca el valor de dia del mes"));   
    }while(dia>31);
} else if(mes == 2){
    do{
        var dia = parseInt(prompt("Introduzca el valor de dia del mes"));   
        }while(dia>28);
}else{
    do{
        var dia = parseInt(prompt("Introduzca el valor de dia del mes"));   
        }while(dia>30);
}
//Comprobaremos si el mes y el dia introdicidos corresponden al dia de navidad
 if (dia==25 && mes==12) {
     alert("!!!FELIZ DIA DE NAVIDAD!!!!!");
 }else{
     alert("Lo sentimos, sus datos introducidos no corresponden al dia de navidad");
 }

