do{
var dato = parseFloat(prompt("Escriba el numero que qquiera anlizar entre 0 y 10 (0.0):"));
}while (dato>10 || dato<0);

//Al introdicir los datos el formato sera 0.0
if (dato<3) {
    alert("Muy deficiente");
}else if (dato>3 && dato<5) {
    alert("Insuficiente");
}else if (dato>5 && dato<6){
    alert("Bien");
}else if (dato>6 && dato<9){
    alert("Notable");
} else{
    alert("Sobresaliente");
}