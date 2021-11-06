function Salida(num,numA){
    if(num>numA){
        return  alert('El numero es menor');
      }else if(num<numA){
         return alert('El numero es mayor');
        
      }else{
          return alert('Acertaste');
      }
}

let intentos=0;
let numAleatorio = null;
let continuar;
let numUsuario = null;
do{
    numAleatorio = parseInt(Math.random()*100);
    while(numUsuario!=numAleatorio){    
         numUsuario = prompt('Introduzca un numero');    
        
        if (isNaN(numUsuario)==false) {
            Salida(numUsuario,numAleatorio);
            
        }else{
            alert('No es un numero');
        }
        intentos++;
    }
    alert('Numero de intentos: '+intentos);
    continuar = confirm('Desea continuar');
    intentos=0;    
} while (continuar==true);

document.write('<h1>Gracias por jugar</h1>');