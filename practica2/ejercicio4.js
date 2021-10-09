factorial = num => (num<2)?1:num *factorial(num-1);
let numItroducido = prompt('Introduce un numero:');

if(isNaN(numItroducido)==false){
    alert('Es un numero');
    alert('El facotrial de '+numItroducido+' es ' +factorial(numItroducido));
}else{
    alert('No es un numero');
}